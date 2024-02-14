import axios from "axios";
import { GETFILTER } from "..";
export const FilterApi = (formData) => {
    return axios.post(GETFILTER, formData);
  };