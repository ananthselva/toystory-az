// src/api/myaccount/wallet/getSaveCardApi.js
import axios from 'axios';
import { GETPROFILE } from '../../index';


export const getProfileApi = (postData) => {
  return axios.post(GETPROFILE, postData);
};
