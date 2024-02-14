// src/reducers/myaccount/wallet/savecardReducer.js
import { GET_SAVECARD_SUCCESS, GET_SAVECARD_FAILURE } from '../../../actions/types';

const initialState = {
  savecard: null,
  error: null,
}; 

export const savecardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SAVECARD_SUCCESS:
      return {
        ...state,
        savecard: action.payload,
        error: null,
      };
    case GET_SAVECARD_FAILURE:
      return {
        ...state,
        savecard: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
