// src/actions/checkout/placeorderActions.js
import { placeOrderApi } from "../../api/checkout/placeOrderApi";
import { PLACEORDER_SUCCESS, PLACEORDER_FAILURE } from "../types";

export const placeOrderSuccess = (placeorder) => ({
  type: PLACEORDER_SUCCESS,
  payload: placeorder,
});

export const placeOrderFailure = (error) => ({
  type: PLACEORDER_FAILURE,
  payload: error,
});

export const postPlaceOrder = (postData) => {
  return (dispatch) => {
    placeOrderApi(postData)
      .then((response) => {
        dispatch(placeOrderSuccess(response.data));
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
        dispatch(placeOrderFailure(error.message));
      });
  };
};
