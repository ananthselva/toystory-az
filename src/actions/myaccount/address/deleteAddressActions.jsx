// src/actions/myaccount/address/deleteAddressActions.js
import { deleteAddressApi } from "../../../api/myaccount/address/deleteAddressApi";
import { DELETE_ADDRESS_SUCCESS, DELETE_ADDRESS_FAILURE } from "../../types";

export const deleteAddressSuccess = (deleteaddress) => ({
  type: DELETE_ADDRESS_SUCCESS,
  payload: deleteaddress,
});

export const deleteAddressFailure = (error) => ({
  type: DELETE_ADDRESS_FAILURE,
  payload: error,
});

export const deleteAddress = (postData) => {
  return (dispatch) => {
    deleteAddressApi(postData)
      .then((response) => {
        dispatch(deleteAddressSuccess(response.data));
      })
      .catch((error) => {
        dispatch(deleteAddressFailure(error.message));
      });
  };
};
