// src/actions//myaccount/walletHistoryActions.js
import { deleteSaveCardApi } from '../../../api/myaccount/wallet/deleteSaveCardApi';
import { DELETE_SAVECARD_SUCCESS, DELETE_SAVECARD_FAILURE } from '../../types';

export const deleteSaveCardSuccess = (dsavecard) => ({
  type: DELETE_SAVECARD_SUCCESS,
  payload: dsavecard,
});

export const deleteSaveCardFailure = (error) => ({
  type: DELETE_SAVECARD_FAILURE,
  payload: error,
});

export const deleteSaveCard = (postData) => {
  
  return (dispatch) => {
    deleteSaveCardApi(postData)
      .then((response) => {
        dispatch(deleteSaveCardSuccess(response.data));
      })
      .catch((error) => {
        dispatch(deleteSaveCardFailure(error.message));
      });
  };
};
