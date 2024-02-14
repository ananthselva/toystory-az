import { sendAppLinkApi } from "../../api/home/sendAppLink";
import {
  SEND_APP_LINK_REQUEST,
  SEND_APP_LINK_SUCCESS,
  SEND_APP_LINK_FAILURE,
} from "../types";

export const sendAppLinkRequest = () => ({
  type: SEND_APP_LINK_REQUEST,
});

export const sendAppLinkSuccess = (formData) => ({
  type: SEND_APP_LINK_SUCCESS,
  payload: formData,
});

export const sendAppLinkFailure = (error) => ({
  type: SEND_APP_LINK_FAILURE,
  payload: error,
});

export const sendAppLink = (formData) => {
  return (dispatch) => {
    dispatch(sendAppLinkRequest());

    sendAppLinkApi(formData)
      .then((response) => {
        if (response.data.status === true) {
          dispatch(sendAppLinkSuccess(response.data.data));
        } else {
          dispatch(sendAppLinkFailure(response.data.data));
        }
      })
      .catch((error) => {
        dispatch(sendAppLinkFailure(error.message));
      });
  };
};
