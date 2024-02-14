// src/api/myaccount/order/getbilldetailApi.js
import { GETBILLDETAIL } from '../../index';

import axios from 'axios';

export const getBillDetailApi = (postData) => {
  return axios.post(GETBILLDETAIL, postData);
};
