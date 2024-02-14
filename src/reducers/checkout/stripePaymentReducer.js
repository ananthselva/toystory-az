// src/reducers/checkout/stripePaymentReducer.js
import { SPD_SUCCESS, SPD_FAILURE } from "../../actions/types";

const initialState = {
  stripepayment: null,
  error: null,
};

export const stripePaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPD_SUCCESS:
      return {
        ...state,
        stripepayment: action.payload,
        error: null,
      };
    case SPD_FAILURE:
      return {
        ...state,
        stripepayment: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
