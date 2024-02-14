// src/api/myaccount/address/deleteAddressApi.js
import axios from "axios";
import { DELETEADDRESSURL } from "../../index";

export const deleteAddressApi = (postData) => {
  return axios.post(DELETEADDRESSURL, postData);
};
