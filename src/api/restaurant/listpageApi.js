
import axios from 'axios';
import { RESTAURANT } from '../index';

export const listpageApi = (formData) => {
  return axios.post(RESTAURANT, formData);
};
