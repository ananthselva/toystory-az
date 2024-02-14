// src/reducers/myaccount/wallet/updatePrimarySavecardReducer.jsx
import { UPDATE_PRIMARYSAVECARD_SUCCESS, UPDATE_PRIMARYSAVECARD_FAILURE } from '../../../actions/types';

const initialState = {
  upsavecard: null,
  error: null,
}; 

export const upsavecardReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRIMARYSAVECARD_SUCCESS:
      return {
        ...state,
        upsavecard: action.payload,
        error: null,
      };
    case UPDATE_PRIMARYSAVECARD_FAILURE:
      return {
        ...state,
        upsavecard: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
