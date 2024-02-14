// src/actions/checkout/placeorderActions.js
import { stripePaymentDetailApi } from "../../api/checkout/stripePaymentDetailApi";
import { SPD_SUCCESS, SPD_FAILURE } from "../types";

export const stripePaymentSuccess = (stripepayment) => ({
  type: SPD_SUCCESS,
  payload: stripepayment,
});

export const stripePaymentFailure = (error) => ({
  type: SPD_FAILURE,
  payload: error,
});

export const getStripePayment = (postData) => {
  return (dispatch) => {
    stripePaymentDetailApi(postData)
      .then((response) => {
        dispatch(stripePaymentSuccess(response.data));
      })
      .catch((error) => {
        dispatch(stripePaymentFailure(error.message));
      });
  };
};
