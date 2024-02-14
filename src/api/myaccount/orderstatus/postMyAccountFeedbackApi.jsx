// src/api/myaccount/order/postMyAccountFeedbackApi.js
import { CREATEMYACCOUNTFEEDBACK } from "../../index";

import axios from "axios";

export const postMyAccountFeedbackApi = (postData) => {
  return axios.post(CREATEMYACCOUNTFEEDBACK, postData);
};
