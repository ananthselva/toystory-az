// src/actions//myaccount/wallet/addSavecardActions.js
import { addSaveCardApi } from '../../../api/myaccount/wallet/addSaveCardApi';
import { ADD_SAVECARD_SUCCESS, ADD_SAVECARD_FAILURE } from '../../types';

export const addSaveCardSuccess = (adsavecard) => ({
  type: ADD_SAVECARD_SUCCESS,
  payload: adsavecard,
});

export const addSaveCardFailure = (error) => ({
  type: ADD_SAVECARD_FAILURE,
  payload: error,
});

export const addSaveCard = (postData) => {
  return (dispatch) => {
    addSaveCardApi(postData)
      .then((response) => {
        dispatch(addSaveCardSuccess(response.data));
      })
      .catch((error) => {
        dispatch(addSaveCardFailure(error.message));
      });
  };
};
