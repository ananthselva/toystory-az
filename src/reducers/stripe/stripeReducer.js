// stripeReducer.js
import { SET_STRIPE } from "../../actions/types";

const initialState = {
  stripe: null,
};

export const stripeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STRIPE:
      return {
        ...state,
        stripe: action.payload,
      };
    default:
      return state;
  }
};
