// src/actions/myaccount/order/orderDetailActions.js
import { getBillDetailApi } from '../../../api/myaccount/order/getbilldetailApi';
import { GET_ORDERDETAIL_SUCCESS, GET_ORDERDETAIL_FAILURE } from '../../types';

export const getOrderDetailSuccess = (orderdetail) => ({
  type: GET_ORDERDETAIL_SUCCESS,
  payload: orderdetail,
});

export const getOrderDetailFailure = (error) => ({
  type: GET_ORDERDETAIL_FAILURE,
  payload: error,
});

export const getOrderDetail = (postData) => {
  return (dispatch) => {
    getBillDetailApi(postData)
      .then((response) => {
        dispatch(getOrderDetailSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getOrderDetailFailure(error.message));
      });
  };
};
