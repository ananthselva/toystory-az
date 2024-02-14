import {
  CREATE_FEEDBACK_REQUEST,
  CREATE_FEEDBACK_SUCCESS,
  CREATE_FEEDBACK_FAILURE,
} from "../../actions/types";

// reducer.js
const initialState = {
  isLoading: false,
  response: null,
  error: null,
};

export const createClientFeedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FEEDBACK_REQUEST:
      return { ...state, isLoading: true, response: null, error: null };
    case CREATE_FEEDBACK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
        error: null,
      };
    case CREATE_FEEDBACK_FAILURE:
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
