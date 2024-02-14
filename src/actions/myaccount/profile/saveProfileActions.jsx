// src/actions//myaccount/sendProfileOtpActions.js
import { saveProfileApi } from "../../../api/myaccount/profile/saveProfileApi";
import { SAVE_PROFILE_SUCCESS, SAVE_PROFILE_FAILURE } from "../../types";

export const saveProfileSuccess = (saveprofile) => ({
  type: SAVE_PROFILE_SUCCESS,
  payload: saveprofile,
});

export const saveProfileFailure = (error) => ({
  type: SAVE_PROFILE_FAILURE,
  payload: error,
});

export const saveProfile = (postData) => {
  return (dispatch) => {
    saveProfileApi(postData)
      .then((response) => {
        dispatch(saveProfileSuccess(response.data));
      })
      .catch((error) => {
        dispatch(saveProfileFailure(error.message));
      });
  };
};
