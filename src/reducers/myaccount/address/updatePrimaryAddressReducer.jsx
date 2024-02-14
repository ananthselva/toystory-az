// src/reducers/myaccount/address/updatePrimaryAddressReducer.js
import {
  UPDATEPRIMARY_ADDRESS_SUCCESS,
  UPDATEPRIMARY_ADDRESS_FAILURE,
} from "../../../actions/types";

const initialState = {
  updateprimaryaddress: null,
  error: null,
};

export const updatePrimaryAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATEPRIMARY_ADDRESS_SUCCESS:
      return {
        ...state,
        updateprimaryaddress: action.payload,
        error: null,
      };
    case UPDATEPRIMARY_ADDRESS_FAILURE:
      return {
        ...state,
        updateprimaryaddress: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
