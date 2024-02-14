// src/reducers/myaccount/address/getAddressReducer.js
import {
  GET_ADDRESS_SUCCESS,
  GET_ADDRESS_FAILURE,
} from "../../../actions/types";

const initialState = {
  address: null,
  error: null,
};

export const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADDRESS_SUCCESS:
      return {
        ...state,
        address: action.payload,
        error: null,
      };
    case GET_ADDRESS_FAILURE:
      return {
        ...state,
        address: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
