import { instance } from 'api/apiConfig';
import { CommentsType, PhotosType } from 'types';

export const profileApi = {
  /**
   * getProfile function will attempt to make API call with id of profile to the endpoint
   * @async
   * @return {Promise<PhotosType>}
   * @param {string} id
   */

  async getProfile(id: string): Promise<PhotosType> {
    const res = await instance.get<PhotosType>(`photos/${id}`);
    return res.data;
  },
  /**
   * getComments function will attempt to make API call with id of profile to the endpoint
   * and get Array of comments
   * @async
   * @return {Promise<CommentsType[]>}
   * @param {string} id
   */
  async getComments(id: string): Promise<CommentsType[]> {
    const res = await instance.get<CommentsType[]>(`comments?postId=${id}`);
    return res.data;
  },
};
