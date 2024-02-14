import axios from 'axios';
import { ADDONDATA } from '../index';

export const addonDetailApi = (postData) => {
  return axios.post(ADDONDATA, postData);
};