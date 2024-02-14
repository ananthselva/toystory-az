import axios from "axios";
import { CREATEEMAILFEEDBACK } from "../index";

export const createClientFeedbackApi = (formData) => {
  return axios.post(CREATEEMAILFEEDBACK, formData);
};
