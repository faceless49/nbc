import { ParsedUrlQuery } from 'querystring';

import React, { FC } from 'react';

import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './Photo.module.scss';

import { profileApi } from 'api/profileApi';
import { Comments } from 'components/Comments';
import { Header } from 'components/Header';
import Error from 'pages/404';
import { CommentsType, PhotosType, ReturnComponentType } from 'types';

type PhotoPageProps = {
  profile: PhotosType;
  comments: CommentsType[];
};

const PhotoPage: FC<PhotoPageProps> = ({ profile, comments }): ReturnComponentType => {
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
      <Comments comments={comments} />
    </article>
  );
};

export default PhotoPage;

type Params = ParsedUrlQuery & {
  id: string;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.params as Params;
  const profile: PhotosType = await profileApi.getProfile(id);
  const comments: CommentsType[] = await profileApi.getComments(id);
  return {
    props: {
      profile,
      comments,
    },
  };
};
