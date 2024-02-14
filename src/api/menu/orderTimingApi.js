
import axios from 'axios';
import { ORDERTIMING } from '../index';

export const orderTimingApi = (formData) => {
  return axios.post(ORDERTIMING, formData);
};
