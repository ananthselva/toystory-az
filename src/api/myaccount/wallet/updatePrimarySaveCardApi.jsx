// src/api/myaccount/wallet/updatePrimarySavecardApi.js
import axios from 'axios';
import { UPDATEPRIMARYSAVECARDURL } from '../../index';

export const updatePrimarySaveCardApi = (postData) => {
  return axios.post(UPDATEPRIMARYSAVECARDURL, postData);
};
