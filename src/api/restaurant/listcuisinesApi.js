import axios from "axios";
import { CUISINES } from "../index";
export const listcuisinesApi = (formData) => {
    return axios.post(CUISINES, formData);
  };