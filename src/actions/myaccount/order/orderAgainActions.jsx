// src/actions/myaccount/order/orderDetailActions.js
import { orderAgainApi } from "../../../api/myaccount/order/orderAgainApi";
import { GET_ORDERAGAIN_SUCCESS, GET_ORDERAGAIN_FAILURE } from "../../types";

export const getOrderAgainSuccess = (orderagain) => ({
  type: GET_ORDERAGAIN_SUCCESS,
  payload: orderagain,
});

export const getOrderAgainFailure = (error) => ({
  type: GET_ORDERAGAIN_FAILURE,
  payload: error,
});

export const getOrderAgain = (postData) => {
  return (dispatch) => {
    orderAgainApi(postData)
      .then((response) => {
        dispatch(getOrderAgainSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getOrderAgainFailure(error.message));
      });
  };
};
