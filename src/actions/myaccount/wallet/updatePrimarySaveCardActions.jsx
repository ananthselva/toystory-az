// src/actions//myaccount/updatePrimarySavecardActions.js
import { updatePrimarySaveCardApi } from "../../../api/myaccount/wallet/updatePrimarySaveCardApi";
import {
  UPDATE_PRIMARYSAVECARD_SUCCESS,
  UPDATE_PRIMARYSAVECARD_FAILURE,
} from "../../types";

export const updatePrimarySaveCardSuccess = (upsavecard) => ({
  type: UPDATE_PRIMARYSAVECARD_SUCCESS,
  payload: upsavecard,
});

export const updatePrimarySaveCardFailure = (error) => ({
  type: UPDATE_PRIMARYSAVECARD_FAILURE,
  payload: error,
});

export const updatePrimarySaveCard = (postData) => {
  return (dispatch) => {
    updatePrimarySaveCardApi(postData)
      .then((response) => {
        dispatch(updatePrimarySaveCardSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updatePrimarySaveCardFailure(error.message));
      });
  };
};
