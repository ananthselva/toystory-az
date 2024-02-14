// src/api/myaccount/wallet/saveProfileApi.js
import axios from "axios";
import { UPDATEPROFILE } from "../../index";

export const saveProfileApi = (postData) => {
  return axios.post(UPDATEPROFILE, postData);
};
