// src/actions/myaccount/orderstatus/postMyAccountFeedbackActions.jsx
import { postMyAccountFeedbackApi } from "../../../api/myaccount/orderstatus/postMyAccountFeedbackApi";
import {
  GET_MYACCOUNTFEEDBACK_SUCCESS,
  GET_MYACCOUNTFEEDBACK_FAILURE,
} from "../../types";

export const getMyAccountFeedbackSuccess = (myaccountfeedback) => ({
  type: GET_MYACCOUNTFEEDBACK_SUCCESS,
  payload: myaccountfeedback,
});

export const getMyAccountFeedbackFailure = (error) => ({
  type: GET_MYACCOUNTFEEDBACK_FAILURE,
  payload: error,
});

export const getMyAccountFeedback = (postData) => {
  return (dispatch) => {
    postMyAccountFeedbackApi(postData)
      .then((response) => {
        dispatch(getMyAccountFeedbackSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getMyAccountFeedbackFailure(error.message));
      });
  };
};
