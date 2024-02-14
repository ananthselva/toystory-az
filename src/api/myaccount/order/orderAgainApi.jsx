// src/api/myaccount/order/orderAgainApi.js
import { ORDERAGAIN } from "../../index";

import axios from "axios";

export const orderAgainApi = (postData) => {
  return axios.post(ORDERAGAIN, postData);
};
