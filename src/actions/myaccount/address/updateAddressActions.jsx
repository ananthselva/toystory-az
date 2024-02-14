// src/actions/myaccount/address/updateAddressActions.js
import { updateAddressApi } from "../../../api/myaccount/address/updateAddressApi";
import { UPDATE_ADDRESS_SUCCESS, UPDATE_ADDRESS_FAILURE } from "../../types";

export const updateAddressSuccess = (updateaddress) => ({
  type: UPDATE_ADDRESS_SUCCESS,
  payload: updateaddress,
});

export const updateAddressFailure = (error) => ({
  type: UPDATE_ADDRESS_FAILURE,
  payload: error,
});

export const updateAddress = (postData) => {
  return (dispatch) => {
    updateAddressApi(postData)
      .then((response) => {
        dispatch(updateAddressSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateAddressFailure(error.message));
      });
  };
};
