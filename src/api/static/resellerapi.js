// src/api/homepageApi.js
import axios from "axios";

import { RESELLER } from "../index";

export const getresellerApi = (formData) => {
  return axios.post(RESELLER, formData);
};
