// src/api/myaccount/address/updateAddressApi.js
import axios from "axios";
import { UPDATEADDRESSURL } from "../../index";

export const updateAddressApi = (postData) => {
  return axios.post(UPDATEADDRESSURL, postData);
};
