// src/actions/myaccount/address/addAddressActions.js
import { addAddressApi } from "../../../api/myaccount/address/addAddressApi";
import { ADD_ADDRESS_SUCCESS, ADD_ADDRESS_FAILURE } from "../../types";

export const addAddressSuccess = (addaddress) => ({
  type: ADD_ADDRESS_SUCCESS,
  payload: addaddress,
});

export const addAddressFailure = (error) => ({
  type: ADD_ADDRESS_FAILURE,
  payload: error,
});

export const addAddress = (postData) => {
  return (dispatch) => {
    addAddressApi(postData)
      .then((response) => {
        dispatch(addAddressSuccess(response.data));
      })
      .catch((error) => {
        dispatch(addAddressFailure(error.message));
      });
  };
};
