
import axios from 'axios';
import { APPLINK } from '../index';

export const sendAppLinkApi = (formData) => {
  return axios.post(APPLINK, formData);
};
