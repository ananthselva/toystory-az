// src/reducers/myaccount/wallet/adsavecardReducer.js
import { ADD_SAVECARD_SUCCESS, ADD_SAVECARD_FAILURE } from '../../../actions/types';

const initialState = {
  adsavecard: null,
  error: null,
}; 

export const adsavecardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SAVECARD_SUCCESS:
      return {
        ...state,
        adsavecard: action.payload,
        error: null,
      };
    case ADD_SAVECARD_FAILURE:
      return {
        ...state,
        adsavecard: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
