
import axios from 'axios';
import { ABOUTDATA } from '../index';

export const aboutDetailApi = (formData) => {
  return axios.post(ABOUTDATA, formData);
};
