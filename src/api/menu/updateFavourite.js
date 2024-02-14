import axios from "axios";
import { UPDATEFAVOURITE } from "../index";

export const updateFavouriteApi = (formData) => {
  return axios.post(UPDATEFAVOURITE, formData);
};
