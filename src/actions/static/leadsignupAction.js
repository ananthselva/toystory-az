import { leadSignUpApi } from "../../api/static/leadsignupapi";

import {
  LEAD_SIGN_UP_REQUEST,
  LEAD_SIGN_UP_SUCCESS,
  LEAD_SIGN_UP_FAILURE,
} from "../types";

export const leadSignUpRequest = () => ({
  type: LEAD_SIGN_UP_REQUEST,
});

export const leadSignUpSuccess = (formData) => ({
  type: LEAD_SIGN_UP_SUCCESS,
  payload: formData,
});

export const leadSignUpFailue = (error) => ({
  type: LEAD_SIGN_UP_FAILURE,
  payload: error,
});

export const leadSignUp = (formData) => {
  return (dispatch) => {
    dispatch(leadSignUpRequest());

    leadSignUpApi(formData)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === true) {
          dispatch(leadSignUpSuccess(response.data.data));
        } else {
          dispatch(leadSignUpFailue(response.data.data));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(leadSignUpFailue(error.message));
      });
  };
};
