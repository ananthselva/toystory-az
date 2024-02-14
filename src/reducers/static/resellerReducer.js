// src/reducers/userReducer.js
import {
  RESELLER_REQUEST,
  RESELLER_SUCCESS,
  RESELLER_FAILURE,
} from "../../actions/types";

const initialState = {
  isLoading: false,
  response: null,
  error: null,
};

export const resellerReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESELLER_REQUEST:
      return { ...state, isLoading: true, response: null, error: null };
    case RESELLER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
        error: null,
      };
    case RESELLER_FAILURE:
      return {
        ...state,
        isLoading: false,
        response: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
