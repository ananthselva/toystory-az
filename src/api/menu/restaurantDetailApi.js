
import axios from 'axios';
import { RESTAURANTDETAIL } from '../index';

export const restaurantDetailApi = (formData) => {
  return axios.post(RESTAURANTDETAIL, formData);
};
