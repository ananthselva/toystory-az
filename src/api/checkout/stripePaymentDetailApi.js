// src/api/checkout/stripepaymentdetailapi.js
import axios from "axios";
import { STRIPEPAYMENTDETAIL } from "../index";

export const stripePaymentDetailApi = (postData) => {
  return axios.post(STRIPEPAYMENTDETAIL, postData);
};
