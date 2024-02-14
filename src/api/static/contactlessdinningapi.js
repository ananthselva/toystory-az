import axios from "axios";
import { CONTACTLESSDINNING } from "../index";

export const contactlessdinningApi = (formData) => {
  return axios.post(CONTACTLESSDINNING, formData);
};
