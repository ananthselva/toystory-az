// src/actions/myaccount/order/orderHistoryActions.js
import { getOrderHistoryApi } from '../../../api/myaccount/order/orderHistoryApi';
import { GET_ORDERHISTORY_SUCCESS, GET_ORDERHISTORY_FAILURE } from '../../types';

export const getOrderHistorySuccess = (orderhistory) => ({
  type: GET_ORDERHISTORY_SUCCESS,
  payload: orderhistory,
});

export const getOrderHistoryFailure = (error) => ({
  type: GET_ORDERHISTORY_FAILURE,
  payload: error,
});

export const getOrderHistory = (postData) => {
  return (dispatch) => {
    getOrderHistoryApi(postData)
      .then((response) => {
        dispatch(getOrderHistorySuccess(response.data));
      })
      .catch((error) => {
        dispatch(getOrderHistoryFailure(error.message));
      });
  };
};
