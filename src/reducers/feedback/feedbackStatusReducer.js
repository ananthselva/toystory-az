import {
  FEEDBACK_STATUS_REQUEST,
  FEEDBACK_STATUS_SUCCESS,
  FEEDBACK_STATUS_FAILURE,
} from "../../actions/types";

// reducer.js
const initialState = {
  isLoading: false,
  response: null,
  error: null,
};

export const feedbackStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case FEEDBACK_STATUS_REQUEST:
      return { ...state, isLoading: true, response: null, error: null };
    case FEEDBACK_STATUS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
        error: null,
      };
    case FEEDBACK_STATUS_FAILURE:
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
