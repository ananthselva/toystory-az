import axios from "axios";
import { UPDATECUSTOMERADDRESS } from "../index";

export const updateAddressApi = (postData) => {
  return axios.post(UPDATECUSTOMERADDRESS, postData);
};
