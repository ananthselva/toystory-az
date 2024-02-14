// src/reducers/myaccount/orderstatus/myAccountFeedbackReducer.js
import {
  GET_MYACCOUNTFEEDBACK_SUCCESS,
  GET_MYACCOUNTFEEDBACK_FAILURE,
} from "../../../actions/types";

const initialState = {
  myaccountfeedback: null,
  error: null,
};

export const myAccountFeedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MYACCOUNTFEEDBACK_SUCCESS:
      return {
        ...state,
        myaccountfeedback: action.payload,
        error: null,
      };
    case GET_MYACCOUNTFEEDBACK_FAILURE:
      return {
        ...state,
        myaccountfeedback: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
