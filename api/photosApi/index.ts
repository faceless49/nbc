import { instance, LIMIT_LOAD_PHOTOS, LIMIT_STARTED_PHOTOS } from 'api/apiConfig';
import { PhotosType } from 'types';

export const photosApi = {
  loadPhotos() {
    return instance
      .get<PhotosType[]>(`photos?_limit=${LIMIT_STARTED_PHOTOS}`)
      .then(res => res.data);
  },
  getMorePhotos(photos: PhotosType[]) {
    return instance.get(`photos?_start=${photos.length}&_limit=${LIMIT_LOAD_PHOTOS}`);
  },
};
