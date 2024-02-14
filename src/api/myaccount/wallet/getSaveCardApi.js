// src/api/myaccount/wallet/getSaveCardApi.js
import axios from 'axios';
import { GETSAVECARDURL } from '../../index';


export const getSaveCardApi = (postData) => {
  return axios.post(GETSAVECARDURL, postData);
};
