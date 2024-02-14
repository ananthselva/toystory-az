import axios from "axios";
import { GETGOOGLEPOSTCODE } from "../index";

export const googleAddressApi = (postData) => {
  return axios.post(GETGOOGLEPOSTCODE, postData);
};
