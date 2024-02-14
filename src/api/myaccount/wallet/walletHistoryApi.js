// src/api/myaccount/walletHistoryApi.js
import axios from 'axios';
import { GETWALLETHISTORYURL } from '../../index';

export const getWalletHistoryApi = (postData) => {
  return axios.post(GETWALLETHISTORYURL, postData);
};
