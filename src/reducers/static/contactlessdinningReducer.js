import {
  CONTACT_LESS_DINNING_REQUEST,
  CONTACT_LESS_DINNING_SUCCESS,
  CONTACT_LESS_DINNING_FAILURE,
} from "../../actions/types";
// reducer.js
const initialState = {
  isLoading: false,
  response: null,
  error: null,
};

export const contactlessdinningReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_LESS_DINNING_REQUEST:
      return { ...state, isLoading: true, response: null, error: null };
    case CONTACT_LESS_DINNING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
        error: null,
      };
    case CONTACT_LESS_DINNING_FAILURE:
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
