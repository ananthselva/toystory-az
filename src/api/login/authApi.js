// src/api/myaccount/authApi.js
import axios from "axios";
import { LOGINOTPGENERATEURL } from "../index";

export const getauthApi = (postData) => {
  return axios.post(LOGINOTPGENERATEURL, postData);
  // return axios.get('https://jsonplaceholder.typicode.com/users/2');
};
