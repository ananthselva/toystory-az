// src/actions/checkout/getchargesdetailActions.js
import { chargesDetailApi } from "../../api/checkout/chargesDetailApi";

import { CHARGESDETAIL_SUCCESS, CHARGESDETAIL_FAILURE } from "../types";

export const chargesDetailSuccess = (chargesdetail) => ({
  type: CHARGESDETAIL_SUCCESS,
  payload: chargesdetail,
});

export const chargesDetailFailure = (error) => ({
  type: CHARGESDETAIL_FAILURE,
  payload: error,
});

export const getchargesDetail = (postData) => {
  return (dispatch) => {
    chargesDetailApi(postData)
      .then((response) => {
        dispatch(chargesDetailSuccess(response.data));
      })
      .catch((error) => {
        dispatch(chargesDetailFailure(error.message));
      });
  };
};
