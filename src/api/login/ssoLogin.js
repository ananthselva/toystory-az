// src/api/myaccount/authApi.js
import axios from 'axios';
import { SSOLOGINREGISTER } from '../index';

export const getssoLoginApi = (postData) => {
    console.log('postData in getssoLoginApi:',postData);
    return axios.post(SSOLOGINREGISTER, postData);
};