// src/reducers/userReducer.js
import {
  BECOMEPARTNER_REQUEST,
  BECOMEPARTNER_SUCCESS,
  BECOMEPARTNER_FAILURE,
} from "../../actions/types";

const initialState = {
  isLoading: false,
  response: null,
  error: null,
};

export const partnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BECOMEPARTNER_REQUEST:
      return { ...state, isLoading: true, response: null, error: null };
    case BECOMEPARTNER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
        error: null,
      };
    case BECOMEPARTNER_FAILURE:
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
