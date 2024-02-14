import axios from "axios";
import { FEEDBACKSTATUS } from "../index";

export const feedbackStatusApi = (formData) => {
  return axios.post(FEEDBACKSTATUS, formData);
};
