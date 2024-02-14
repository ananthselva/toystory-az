// src/reducers/myaccount/order/orderagainReducer.jsx
import {
  GET_ORDERAGAIN_SUCCESS,
  GET_ORDERAGAIN_FAILURE,
} from "../../../actions/types";

const initialState = {
  orderagain: null,
  error: null,
};

export const orderagainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERAGAIN_SUCCESS:
      return {
        ...state,
        orderagain: action.payload,
        error: null,
      };
    case GET_ORDERAGAIN_FAILURE:
      return {
        ...state,
        orderagain: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
