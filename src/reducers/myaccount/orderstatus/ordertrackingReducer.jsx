// src/reducers/myaccount/orderstatus/ordertrackingReducer.js
import {
  GET_ORDERTRACKING_SUCCESS,
  GET_ORDERTRACKING_FAILURE,
} from "../../../actions/types";

const initialState = {
  ordertracking: null,
  error: null,
};

export const ordertrackingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERTRACKING_SUCCESS:
      return {
        ...state,
        ordertracking: action.payload,
        error: null,
      };
    case GET_ORDERTRACKING_FAILURE:
      return {
        ...state,
        ordertracking: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
