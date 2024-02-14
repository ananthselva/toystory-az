// src/actions//myaccount/walletHistoryActions.js
import { getSaveCardApi } from '../../../api/myaccount/wallet/getSaveCardApi';
import { GET_SAVECARD_SUCCESS, GET_SAVECARD_FAILURE } from '../../types';

export const getSaveCardSuccess = (savecard) => ({
  type: GET_SAVECARD_SUCCESS,
  payload: savecard,
});

export const getSaveCardFailure = (error) => ({
  type: GET_SAVECARD_FAILURE,
  payload: error,
});

export const getSaveCard = (postData) => {
  return (dispatch) => {
    getSaveCardApi(postData)
      .then((response) => {
        dispatch(getSaveCardSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getSaveCardFailure(error.message));
      });
  };
};
