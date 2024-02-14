// src/api/myaccount/wallet/addSaveCardApi.js
import axios from 'axios';
import { ADDSAVECARDURL } from '../../index';


export const addSaveCardApi = (postData) => {
  return axios.post(ADDSAVECARDURL, postData);
};
