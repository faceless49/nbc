import React, { FC } from 'react';

import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './Photo.module.scss';

import { Comments } from 'components/Comments';
import { Header } from 'components/Header';
import Error from 'pages/404';
import { CommentsType, PhotosType, ReturnComponentType } from 'types';
import { API_URL } from 'vars';

type PhotoPageProps = {
  profile: PhotosType;
  data: CommentsType[];
};

const PhotoPage: FC<PhotoPageProps> = ({ profile, data }): ReturnComponentType => {
  const { title, url } = profile;
  const router = useRouter();

  if (!profile) {
    return <Error />;
  }

  return (
    <article className={styles.profile_inner}>
      <Header title={title} onPrevPageClick={() => router.push('/')} />
      <Image
        className={styles.profile_avatar}
        src={url}
        alt={title}
        width={600}
        height={600}
      />
      <Comments comments={data} />
    </article>
  );
};

export default PhotoPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const responseProfile = await fetch(`${API_URL}photos/${params?.id}`);
  const profile: PhotosType = await responseProfile.json();

  const responseData = await fetch(`${API_URL}comments?postId=${params?.id}`);
  const data: CommentsType[] = await responseData.json();

  return {
    props: {
      profile,
      data,
    },
  };
};
