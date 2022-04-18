import { instance, LIMIT_LOAD_PHOTOS, LIMIT_STARTED_PHOTOS } from 'api/apiConfig';
import { PhotosType } from 'types';
/**
 * Load will attempt to make API call  to the endpoint
 * for work with Photos
 */

export const photosApi = {
  /**
   * Load will attempt to make API call  to the endpoint
   * for get first 20 photos on Main page at the first render
   *
   * @async
   * @return {Promise<PhotosType[]>}
   */
  loadPhotos() {
    return instance
      .get<PhotosType[]>(`photos?_limit=${LIMIT_STARTED_PHOTOS}`)
      .then(res => res.data);
  },
  /**
   * Load will attempt to make API call  to the endpoint
   * for get first 20 photos on Main page at the first render
   *
   * @async
   * @return {Promise<PhotosType[]>}
   */

  /**
   * Load will attempt to make API call  to the endpoint
   * for get next 10 photos on after scroll
   *
   * @async
   * @return {Promise<PhotosType[]>}
   */
  getMorePhotos(photos: PhotosType[]) {
    return instance.get(`photos?_start=${photos.length}&_limit=${LIMIT_LOAD_PHOTOS}`);
  },
};
