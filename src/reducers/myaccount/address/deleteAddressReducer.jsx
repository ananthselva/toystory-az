// src/reducers/myaccount/address/deleteAddressReducer.js
import {
  DELETE_ADDRESS_SUCCESS,
  DELETE_ADDRESS_FAILURE,
} from "../../../actions/types";

const initialState = {
  deleteaddress: null,
  error: null,
};

export const deleteAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ADDRESS_SUCCESS:
      return {
        ...state,
        deleteaddress: action.payload,
        error: null,
      };
    case DELETE_ADDRESS_FAILURE:
      return {
        ...state,
        deleteaddress: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
