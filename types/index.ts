export type { Nullable } from './Nullable';
export type { ReturnComponentType } from './ReturnComponentType';

export type PhotosType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type CommentsType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
