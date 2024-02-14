import { createClientFeedbackApi } from "../../api/feedback/createFeedbackApi";
import {
  CREATE_FEEDBACK_REQUEST,
  CREATE_FEEDBACK_SUCCESS,
  CREATE_FEEDBACK_FAILURE,
} from "../types";

export const createClientFeedbackRequest = () => ({
  type: CREATE_FEEDBACK_REQUEST,
});

export const createClientFeedbackSuccess = (pageData) => ({
  type: CREATE_FEEDBACK_SUCCESS,
  payload: pageData,
});

export const createClientFeedbackFailure = (error) => ({
  type: CREATE_FEEDBACK_FAILURE,
  payload: error,
});

export const createClientFeedbackDetail = (formData) => {
  return (dispatch) => {
    dispatch(createClientFeedbackRequest());
    createClientFeedbackApi(formData)
      .then((response) => {
        if (response.data.status === true) {
          dispatch(createClientFeedbackSuccess(response.data.message));
        } else {
          dispatch(createClientFeedbackFailure(response.data.message));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(createClientFeedbackFailure(error.message));
      });
  };
};
