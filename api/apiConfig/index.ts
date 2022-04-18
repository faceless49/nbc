import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/';

export const LIMIT_STARTED_PHOTOS = 20;
export const LIMIT_LOAD_PHOTOS = 10;
export const instance = axios.create({
  baseURL: API_URL,
});
