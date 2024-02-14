import { RESTAURANT_DETAIL_REQUEST, RESTAURANT_DETAIL_SUCCESS, RESTAURANT_DETAIL_FAILURE } from '../../actions/types';

// reducer.js
const initialState = {
    isLoading: false,
    response: null,
    error: null
};
  
export const restaurantDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESTAURANT_DETAIL_REQUEST:
            return { ...state, isLoading: true, response: null, error: null };
        case RESTAURANT_DETAIL_SUCCESS:
            return { ...state, isLoading: false, response: action.payload, error: null };
        case RESTAURANT_DETAIL_FAILURE:
            return { ...state, isLoading: false, response: null, error: action.payload };
        default:
            return state;
    }
};
  
  