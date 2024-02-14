// src/reducers/myaccount/order/orderdetailReducer.js
import { GET_ORDERDETAIL_SUCCESS, GET_ORDERDETAIL_FAILURE } from '../../../actions/types';

const initialState = {
  orderdetail: null,
  error: null,
}; 

export const orderdetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERDETAIL_SUCCESS:
      return {
        ...state,
        orderdetail: action.payload,
        error: null,
      };
    case GET_ORDERDETAIL_FAILURE:
      return {
        ...state,
        orderdetail: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
