
import axios from 'axios';
import { MENUDATA } from '../index';

export const menuDetailApi = (formData) => {
  return axios.post(MENUDATA, formData);
};
