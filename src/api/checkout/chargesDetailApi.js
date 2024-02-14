// src/api/checkout/chargesdetailApi.js
import axios from "axios";
import { CHARGESDETAILS } from "../index";

export const chargesDetailApi = (postData) => {
  return axios.post(CHARGESDETAILS, postData);
};
