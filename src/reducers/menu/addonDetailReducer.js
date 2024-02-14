import {
  ADDON_DETAIL_REQUEST,
  ADDON_DETAIL_SUCCESS,
  ADDON_DETAIL_FAILURE,
} from "../../actions/types";

// reducer.js
const initialState = {
  isLoading: false,
  response: null,
  error: null,
};

export const addonDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDON_DETAIL_REQUEST:
      return { ...state, isLoading: true, response: null, error: null };
    case ADDON_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        addonData: action.payload,
        error: null,
      };
    case ADDON_DETAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
        addonData: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
