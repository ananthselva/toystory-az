// src/reducers/myaccount/wallet/savecardReducer.js
import { DELETE_SAVECARD_SUCCESS, DELETE_SAVECARD_FAILURE } from '../../../actions/types';

const initialState = {
  dsavecard: null,
  error: null,
}; 

export const dsavecardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_SAVECARD_SUCCESS:
      return {
        ...state,
        dsavecard: action.payload,
        error: null,
      };
    case DELETE_SAVECARD_FAILURE:
      return {
        ...state,
        dsavecard: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
