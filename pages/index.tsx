import { useEffect, useState } from 'react';
import 'antd/dist/antd.css';

import { Spin } from 'antd';
import { GetServerSideProps } from 'next';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Gallery } from 'components/Gallery';
import { Header } from 'components/Header';
import { Nullable, PhotosType, ReturnComponentType } from 'types';
import { API_URL } from 'vars';

const Home = ({
  data,
  LIMIT_PHOTOS,
}: {
  data: PhotosType[];
  LIMIT_PHOTOS: number;
}): ReturnComponentType => {
  const [photos, setPhotos] = useState<PhotosType[]>(data);
  const [fetching, setFetching] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(LIMIT_PHOTOS);
  const [maxCount, setMaxCount] = useState<number | null>();

  const NEXT_COUNT_VALUE = 10;

  const getMorePhotos = async (): Promise<Nullable<void>> => {
    try {
      const res = await fetch(`${API_URL}photos?_start=${photos.length}&_limit=10}`);
      if (res) {
        const newPhotos = await res.json();
        setPhotos(prevState => [...prevState, ...newPhotos]);
        setTotalCount(prevState => prevState + NEXT_COUNT_VALUE);
        setMaxCount(+res.headers.get('x-total-count')!);
      }
    } catch (e) {
      console.warn('Network is down');
    }
  };

  useEffect(() => {
    if (totalCount === maxCount) {
      setFetching(false);
    }
  }, [totalCount]);

  return (
    <div>
      <Header title="Explore" />

      <InfiniteScroll
        dataLength={photos.length}
        next={getMorePhotos}
        hasMore={fetching}
        loader={<Spin size="default" />}
        endMessage={
          <p style={{ textAlign: 'center', fontWeight: '700' }}>YOU ARE AWESOME!</p>
        }
      >
        <Gallery photos={photos} />
      </InfiniteScroll>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const LIMIT_PHOTOS = 20;

  const res = await fetch(`${API_URL}photos?_limit=${LIMIT_PHOTOS}`);
  const data: PhotosType[] = await res.json();

  return {
    props: {
      data,
      LIMIT_PHOTOS,
    },
  };
};

export default Home;
