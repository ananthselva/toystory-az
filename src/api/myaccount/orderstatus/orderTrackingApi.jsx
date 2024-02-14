// src/api/myaccount/order/orderTrackingApi.jsx
import { ORDERTRACKING } from "../../index";

import axios from "axios";

export const getOrderTrackingApi = (postData) => {
  return axios.post(ORDERTRACKING, postData);
};
