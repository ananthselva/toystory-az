
import axios from 'axios';
import { DELIVERYPOSTCODE } from '../index';

export const postcodeDetailApi = (formData) => {
  return axios.post(DELIVERYPOSTCODE, formData);
};
