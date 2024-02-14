// src/reducers/myaccount/address/updateAddressReducer.js
import {
  UPDATE_ADDRESS_SUCCESS,
  UPDATE_ADDRESS_FAILURE,
} from "../../../actions/types";

const initialState = {
  updateaddress: null,
  error: null,
};

export const updateAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ADDRESS_SUCCESS:
      return {
        ...state,
        updateaddress: action.payload,
        error: null,
      };
    case UPDATE_ADDRESS_FAILURE:
      return {
        ...state,
        updateaddress: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
