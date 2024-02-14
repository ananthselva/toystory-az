// src/api/homepageApi.js
import axios from "axios";
import { BECOMEPARTNER } from "../index";

export const becomePartnerApi = (formData) => {
  return axios.post(BECOMEPARTNER, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: false,
  });
};
