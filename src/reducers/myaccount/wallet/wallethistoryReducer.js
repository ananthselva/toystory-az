// src/reducers/myaccount/wallethistoryReducer.js
import { GET_WALLETHISTORY_SUCCESS, GET_WALLETHISTORY_FAILURE } from '../../../actions/types';

const initialState = {
  wallethistory: null,
  error: null,
}; 

export const wallethistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WALLETHISTORY_SUCCESS:
      return {
        ...state,
        wallethistory: action.payload,
        error: null,
      };
    case GET_WALLETHISTORY_FAILURE:
      return {
        ...state,
        wallethistory: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
