// src/actions/myaccount/address/AddressActions.js
import { getAddressApi } from "../../../api/myaccount/address/getAddressApi";
import { GET_ADDRESS_SUCCESS, GET_ADDRESS_FAILURE } from "../../types";

export const getAddressSuccess = (address) => ({
  type: GET_ADDRESS_SUCCESS,
  payload: address,
});

export const getAddressFailure = (error) => ({
  type: GET_ADDRESS_FAILURE,
  payload: error,
});

export const getAddress = (postData) => {
  return (dispatch) => {
    getAddressApi(postData)
      .then((response) => {
        dispatch(getAddressSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getAddressFailure(error.message));
      });
  };
};
