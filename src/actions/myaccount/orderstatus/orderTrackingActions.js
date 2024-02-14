// src/actions/myaccount/orderstatus/orderTrackingActions.jsx
import { getOrderTrackingApi } from "../../../api/myaccount/orderstatus/orderTrackingApi";
import {
  GET_ORDERTRACKING_SUCCESS,
  GET_ORDERTRACKING_FAILURE,
} from "../../types";

export const getOrderTrackingSuccess = (ordertracking) => ({
  type: GET_ORDERTRACKING_SUCCESS,
  payload: ordertracking,
});

export const getOrderTrackingFailure = (error) => ({
  type: GET_ORDERTRACKING_FAILURE,
  payload: error,
});

export const getOrderTracking = (postData) => {
  return (dispatch) => {
    getOrderTrackingApi(postData)
      .then((response) => {
        dispatch(getOrderTrackingSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getOrderTrackingFailure(error.message));
      });
  };
};
