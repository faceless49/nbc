import axios from 'axios';

/**
 * @constant
 * Base URL for Api requests
 */
const API_URL = 'https://jsonplaceholder.typicode.com/';

/**
 * @constant
 * Photo starter kit
 */
export const LIMIT_STARTED_PHOTOS = 20;

/**
 * @constant
 * Limit loading photos after scroll
 */
export const LIMIT_LOAD_PHOTOS = 10;

export const instance = axios.create({
  baseURL: API_URL,
});
