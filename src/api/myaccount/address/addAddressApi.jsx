// src/api/myaccount/address/addAddressApi.js
import axios from "axios";
import { ADDADDRESSURL } from "../../index";

export const addAddressApi = (postData) => {
  return axios.post(ADDADDRESSURL, postData);
};
