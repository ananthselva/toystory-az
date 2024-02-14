// src/api/checkout/placeOrderApi.js
import axios from "axios";
import { PLACEORDERURL } from "../index";

export const placeOrderApi = (postData) => {
  return axios.post(PLACEORDERURL, postData);
};
