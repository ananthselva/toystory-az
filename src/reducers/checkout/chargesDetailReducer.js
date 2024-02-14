// src/reducers/checkout/chargeDetailReducer.js
import {
  CHARGESDETAIL_SUCCESS,
  CHARGESDETAIL_FAILURE,
} from "../../actions/types";

const initialState = {
  chargesdetail: null,
  error: null,
};

export const chargeDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARGESDETAIL_SUCCESS:
      return {
        ...state,
        chargesdetail: action.payload,
        error: null,
      };
    case CHARGESDETAIL_FAILURE:
      return {
        ...state,
        chargesdetail: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
