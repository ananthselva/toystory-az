// src/reducers/myaccount/order/orderhistoryReducer.js
import { GET_ORDERHISTORY_SUCCESS, GET_ORDERHISTORY_FAILURE } from '../../../actions/types';

const initialState = {
  orderhistory: null,
  error: null,
}; 

export const orderhistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERHISTORY_SUCCESS:
      return {
        ...state,
        orderhistory: action.payload,
        error: null,
      };
    case GET_ORDERHISTORY_FAILURE:
      return {
        ...state,
        orderhistory: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
