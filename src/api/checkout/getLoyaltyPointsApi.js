import axios from "axios";
import { GETCHECKOUTLOYALTY } from "../index";

export const getLoyaltyApi = (postData) => {
  return axios.post(GETCHECKOUTLOYALTY, postData);
};
