import { 
    SUGGEST_RESTAURANT_REQUEST, 
    SUGGEST_RESTAURANT_SUCCESS, 
    SUGGEST_RESTAURANT_FAILURE 
} from '../../actions/types';

// reducer.js
const initialState = {
    isLoading: false,
    response: null,
    error: null
};
  
export const suggestRestaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUGGEST_RESTAURANT_REQUEST:
            return { ...state, isLoading: true, response: null, error: null };
        case SUGGEST_RESTAURANT_SUCCESS:
            return { ...state, isLoading: false, response: action.payload, error: null };
        case SUGGEST_RESTAURANT_FAILURE:
            return { ...state, isLoading: false, response: null, error: action.payload };
        default:
            return state;
    }
};
  
  