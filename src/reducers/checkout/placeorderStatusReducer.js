// src/reducers/checkout/placeorderReducer.js
import { PLACEORDER_STATUS ,PLACECARD_STATUS} from "../../actions/types";

const initialState = {
  placeorder: false,
  placecard:false,
  error: null,
};

export const placeorderStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACEORDER_STATUS:
      return {
        ...state,
        placeorder: action.payload,
        placecard:false,
        error: null,
      };
      case PLACECARD_STATUS:
      return {
        ...state,
        placeorder:false,
        placecard: action.payload,
        error: null,
      };
    default:
      return state;
  }
};