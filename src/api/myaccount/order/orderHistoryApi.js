// src/api/myaccount/order/orderHistoryApi.js
import { GETORDERHISTORY } from '../../index';

import axios from 'axios';

export const getOrderHistoryApi = (postData) => {
  return axios.post(GETORDERHISTORY, postData);
};
