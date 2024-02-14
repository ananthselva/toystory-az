// src/api/myaccount/wallet/getSaveCardApi.js
import axios from 'axios';
import { DELETESAVECARDURL } from '../../index';


export const deleteSaveCardApi = (postData) => {
  return axios.post(DELETESAVECARDURL, postData);
};
