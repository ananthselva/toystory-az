
import axios from 'axios';
import { REVIEWDATA } from '../index';

export const reviewDetailApi = (formData) => {
  return axios.post(REVIEWDATA, formData);
};
