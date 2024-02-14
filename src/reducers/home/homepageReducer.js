// src/reducers/userReducer.js
import {
  GET_HOMEPAGE_REQUEST,
  GET_HOMEPAGE_SUCCESS,
  GET_HOMEPAGE_FAILURE,
} from "../../actions/types";

const initialState = {
  isLoading: false,
  response: null,
  error: null,
};

export const homepageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOMEPAGE_REQUEST:
      return { ...state, isLoading: true, response: null, error: null };
    case GET_HOMEPAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
        error: null,
      };
    case GET_HOMEPAGE_FAILURE:
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
