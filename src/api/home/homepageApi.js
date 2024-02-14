// src/api/homepageApi.js
import axios from 'axios';
import { HOMEPAGEURL } from '../index';

export const getHomepageApi = () => {
  return axios.get(HOMEPAGEURL);
};
