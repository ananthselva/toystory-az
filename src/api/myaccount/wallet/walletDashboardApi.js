// src/api/myaccount/walletDashboardApi.js
import axios from 'axios';
import { WALLETDASHBOARDURL } from '../../index';

export const getWalletDashboardApi = (postData) => {
  return axios.post(WALLETDASHBOARDURL, postData);
};
