import { getProfileApi } from "../../../api/myaccount/profile/getProfileApi";
import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from "../../types";

export const getProfileSuccess = (profile) => ({
  type: GET_PROFILE_SUCCESS,
  payload: profile,
});

export const getProfileFailure = (error) => ({
  type: GET_PROFILE_FAILURE,
  payload: error,
});

export const getProfile = (postData) => {
  return (dispatch) => {
    getProfileApi(postData)
      .then((response) => {
        dispatch(getProfileSuccess(response.data));
        // console.log(response);
      })
      .catch((error) => {
        dispatch(getProfileFailure(error.message));
        console.log(error);
      });
  };
};
