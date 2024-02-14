// src/reducers/myaccount/profile/saveProfileReducer.js
import {
  SAVE_PROFILE_SUCCESS,
  SAVE_PROFILE_FAILURE,
} from "../../../actions/types";

const initialState = {
  saveprofile: null,
  error: null,
};

export const saveprofileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PROFILE_SUCCESS:
      return {
        ...state,
        saveprofile: action.payload,
        error: null,
      };
    case SAVE_PROFILE_FAILURE:
      return {
        ...state,
        saveprofile: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
