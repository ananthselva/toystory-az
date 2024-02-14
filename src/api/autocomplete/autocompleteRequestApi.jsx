import axios from 'axios';
import { AUTOCOMPLETEURL } from '../index';


export const autocompleteApi = (data) => {
  return axios.post(AUTOCOMPLETEURL,data);
};
