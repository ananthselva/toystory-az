// src/reducers/myaccount/address/addAddressReducer.js
import {
  ADD_ADDRESS_SUCCESS,
  ADD_ADDRESS_FAILURE,
} from "../../../actions/types";

const initialState = {
  addaddress: null,
  error: null,
};

export const addAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        addaddress: action.payload,
        error: null,
      };
    case ADD_ADDRESS_FAILURE:
      return {
        ...state,
        addaddress: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
