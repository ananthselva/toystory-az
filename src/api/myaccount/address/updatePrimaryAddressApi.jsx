// src/api/myaccount/address/updatePrimaryAddressApi.js
import axios from "axios";
import { UPDATEPRIMARYADDRESSURL } from "../../index";

export const updatePrimaryAddressApi = (postData) => {
  return axios.post(UPDATEPRIMARYADDRESSURL, postData);
};
