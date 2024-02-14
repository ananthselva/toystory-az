import {
  CAREER_REQUEST,
  CAREER_SUCCESS,
  CAREER_FAILURE,
} from "../../actions/types";
// reducer.js
const initialState = {
  isLoading: false,
  response: null,
  error: null,
};

export const careerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAREER_REQUEST:
      return { ...state, isLoading: true, response: null, error: null };
    case CAREER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
        error: null,
      };
    case CAREER_FAILURE:
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
