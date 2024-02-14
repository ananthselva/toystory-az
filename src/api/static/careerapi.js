import axios from "axios";
import { CAREER } from "../index";

export const careerApi = (formData) => {
  return axios.post(CAREER, formData, {
    headers: {
      "Content-Type": "multipart/formData",
    },
    withCredentials: false,
  });
};
