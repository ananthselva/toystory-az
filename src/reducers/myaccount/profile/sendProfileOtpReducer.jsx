// src/reducers/myaccount/profile/sendProfileOtpReducer.js
import {
  SENDOTP_PROFILE_SUCCESS,
  SENDOTP_PROFILE_FAILURE,
} from "../../../actions/types";

const initialState = {
  sendotpprofile: null,
  error: null,
};

export const sendotpprofileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SENDOTP_PROFILE_SUCCESS:
      return {
        ...state,
        sendotpprofile: action.payload,
        error: null,
      };
    case SENDOTP_PROFILE_FAILURE:
      return {
        ...state,
        sendotpprofile: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
