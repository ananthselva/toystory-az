import {
  LEAD_SIGN_UP_REQUEST,
  LEAD_SIGN_UP_SUCCESS,
  LEAD_SIGN_UP_FAILURE,
} from "../../actions/types";
// reducer.js
const initialState = {
  isLoading: false,
  response: null,
  error: null,
};

export const leadSignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEAD_SIGN_UP_REQUEST:
      return { ...state, isLoading: true, response: null, error: null };
    case LEAD_SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
        error: null,
      };
    case LEAD_SIGN_UP_FAILURE:
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
