// src/actions/myaccount/address/updatePrimaryAddressActions.js
import { updatePrimaryAddressApi } from "../../../api/myaccount/address/updatePrimaryAddressApi";
import {
  UPDATEPRIMARY_ADDRESS_SUCCESS,
  UPDATEPRIMARY_ADDRESS_FAILURE,
} from "../../types";

export const updatePrimaryAddressSuccess = (upprimaryaddress) => ({
  type: UPDATEPRIMARY_ADDRESS_SUCCESS,
  payload: upprimaryaddress,
});

export const updatePrimaryAddressFailure = (error) => ({
  type: UPDATEPRIMARY_ADDRESS_FAILURE,
  payload: error,
});

export const updatePrimaryAddress = (postData) => {
  return (dispatch) => {
    updatePrimaryAddressApi(postData)
      .then((response) => {
        dispatch(updatePrimaryAddressSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updatePrimaryAddressFailure(error.message));
      });
  };
};
