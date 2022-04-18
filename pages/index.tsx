import { useEffect, useState } from 'react';

import { Spin } from 'antd';
import { GetServerSideProps, NextPage } from 'next';
import InfiniteScroll from 'react-infinite-scroll-component';

import { LIMIT_STARTED_PHOTOS } from 'api/apiConfig';
import { photosApi } from 'api/photosApi';
import { Gallery } from 'components/Gallery';
import { Header } from 'components/Header';
import { Nullable, PhotosType } from 'types';
import { NEXT_COUNT_VALUE } from 'vars';

const Home: NextPage<{ data: PhotosType[] }> = ({ data }) => {
  const [photos, setPhotos] = useState<PhotosType[]>(data);

  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(LIMIT_STARTED_PHOTOS);
  const [maxCount, setMaxCount] = useState<number | null>();

  /**
   * @async
   * @function get new data(photos array) from Api endpoint after scroll and set them to state
   * @return Promise
   */
  const getMorePhotos = async (): Promise<Nullable<void>> => {
    const response = await photosApi.getMorePhotos(photos);
    try {
      setPhotos(prevState => [...prevState, ...response.data]);
      setTotalCount(prevState => prevState + NEXT_COUNT_VALUE);
      setMaxCount(+response.headers['x-total-count']);
    } catch (e) {
      console.warn('Network is down');
    }
  };

  useEffect(() => {
    if (totalCount === maxCount) {
      setIsFetching(false);
    }
  }, [totalCount]);

  return (
    <div>
      <Header title="Explore" />

      <InfiniteScroll
        dataLength={photos.length}
        next={getMorePhotos}
        hasMore={isFetching}
        loader={<Spin size="default" />}
        endMessage={<p>YOU ARE AWESOME!</p>}
      >
        <Gallery photos={photos} />
      </InfiniteScroll>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await photosApi.loadPhotos();

  return {
    props: {
      data,
      LIMIT_PHOTOS: LIMIT_STARTED_PHOTOS,
    },
  };
};

export default Home;
