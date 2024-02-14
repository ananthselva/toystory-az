import axios from "axios";
import { LEADSIGNUP } from "../index";

export const leadSignUpApi = (formData) => {
  return axios.post(LEADSIGNUP, formData);
};
