import { feedbackStatusApi } from "../../api/feedback/feedbackStatusApi";
import {
  FEEDBACK_STATUS_REQUEST,
  FEEDBACK_STATUS_SUCCESS,
  FEEDBACK_STATUS_FAILURE,
} from "../types";

export const getFeedbackStatusRequest = () => ({
  type: FEEDBACK_STATUS_REQUEST,
});

export const getFeedbackStatusSuccess = (pageData) => ({
  type: FEEDBACK_STATUS_SUCCESS,
  payload: pageData,
});

export const getFeedbackStatusFailure = (error) => ({
  type: FEEDBACK_STATUS_FAILURE,
  payload: error,
});

export const getFeedbackStatusDetail = (formData) => {
  return (dispatch) => {
    dispatch(getFeedbackStatusRequest());
    feedbackStatusApi(formData)
      .then((response) => {
        if (response.data.status === true) {
          dispatch(getFeedbackStatusSuccess(response.data.message));
        } else {
          dispatch(getFeedbackStatusFailure(response.data.message));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(getFeedbackStatusFailure(error.message));
      });
  };
};
