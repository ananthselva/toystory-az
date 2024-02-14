
import axios from 'axios';
import { NOTAKEAWAY } from '../index';

export const suggestApi = (formData) => {
  return axios.post(NOTAKEAWAY, formData);
};
