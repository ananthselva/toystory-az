// src/api/myaccount/wallet/sendProfileOtpApi.js
import axios from "axios";
import { SENDPROFILEOTP } from "../../index";

export const sendProfileOtpApi = (postData) => {
  return axios.post(SENDPROFILEOTP, postData);
};
