// src/api/myaccount/address/getAddressApi.js
import axios from 'axios';
import { GETADDRESSURL } from '../../index';


export const getAddressApi = (postData) => {
  return axios.post(GETADDRESSURL, postData);
};
