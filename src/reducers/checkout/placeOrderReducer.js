// src/reducers/checkout/placeorderReducer.js
import { PLACEORDER_SUCCESS, PLACEORDER_FAILURE } from "../../actions/types";

const initialState = {
  placeorder: null,
  error: null,
};

export const placeOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACEORDER_SUCCESS:
      return {
        ...state,
        placeorder: action.payload,
        error: null,
      };
    case PLACEORDER_FAILURE:
      return {
        ...state,
        placeorder: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
