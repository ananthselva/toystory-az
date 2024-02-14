// src/actions//myaccount/walletHistoryActions.js
import { sendProfileOtpApi } from "../../../api/myaccount/profile/sendProfileotpApi";
import { SENDOTP_PROFILE_SUCCESS, SENDOTP_PROFILE_FAILURE } from "../../types";

export const sendOtpProfileSuccess = (sendotpprofile) => ({
  type: SENDOTP_PROFILE_SUCCESS,
  payload: sendotpprofile,
});

export const sendOtpProfileFailure = (error) => ({
  type: SENDOTP_PROFILE_FAILURE,
  payload: error,
});

export const sendProfileOtp = (postData) => {
  return (dispatch) => {
    sendProfileOtpApi(postData)
      .then((response) => {
        dispatch(sendOtpProfileSuccess(response.data));
      })
      .catch((error) => {
        dispatch(sendOtpProfileFailure(error.message));
      });
  };
};
