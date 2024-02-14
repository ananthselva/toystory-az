// src/actions//myaccount/wallet/walletHistoryActions.js
import { getWalletHistoryApi } from '../../../api/myaccount/wallet/walletHistoryApi';
import { GET_WALLETHISTORY_SUCCESS, GET_WALLETHISTORY_FAILURE } from '../../types';

export const getWalletHistorySuccess = (wallethistory) => ({
  type: GET_WALLETHISTORY_SUCCESS,
  payload: wallethistory,
});

export const getWalletHistoryFailure = (error) => ({
  type: GET_WALLETHISTORY_FAILURE,
  payload: error,
});

export const getWalletHistory = (postData) => {
  return (dispatch) => {
    getWalletHistoryApi(postData)
      .then((response) => {
        dispatch(getWalletHistorySuccess(response.data));
      })
      .catch((error) => {
        dispatch(getWalletHistoryFailure(error.message));
      });
  };
};
