import { instance } from 'api/apiConfig';
import { CommentsType, PhotosType } from 'types';

export const profileApi = {
  getProfile(id: string) {
    return instance.get<PhotosType>(`photos/${id}`).then(res => res.data);
  },
  getComments(id: string) {
    return instance.get<CommentsType[]>(`comments?postId=${id}`).then(res => res.data);
  },
};
