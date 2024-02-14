// src/reducers/myaccount/walletdashboardReducer.js
import { GET_WALLETDASHBOARD_SUCCESS, GET_WALLETDASHBOARD_FAILURE } from '../../../actions/types';

const initialState = {
  walletdashboard: null,
  error: null,
}; 

export const walletdashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WALLETDASHBOARD_SUCCESS:
      return {
        ...state,
        walletdashboard: action.payload,
        error: null,
      };
    case GET_WALLETDASHBOARD_FAILURE:
      return {
        ...state,
        walletdashboard: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
