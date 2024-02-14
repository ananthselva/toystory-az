import { GET_LOYALTY_SUCCESS, GET_LOYALTY_FAILURE } from "../../actions/types";

const initialState = {
  loyaltyPoints: null,
  error: null,
};

export const getLoyaltyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOYALTY_SUCCESS:
      return {
        ...state,
        loyaltyPoints: action.payload,
        error: null,
      };
    case GET_LOYALTY_FAILURE:
      return {
        ...state,
        loyaltyPoints: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
