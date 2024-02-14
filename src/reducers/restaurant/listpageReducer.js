import { RESTAURANT_PAGE_REQUEST, RESTAURANT_PAGE_SUCCESS, RESTAURANT_PAGE_FAILURE,CLEAR_PAGE_DATA } from '../../actions/types';

// reducer.js
const initialState = {
    isLoading: false,
    response: null,
    error: null
};
  
export const listpageReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESTAURANT_PAGE_REQUEST:
            return { ...state, isLoading: true, response: null, error: null };
        case RESTAURANT_PAGE_SUCCESS:
            return { ...state, isLoading: false, response: action.payload, error: null };
        case RESTAURANT_PAGE_FAILURE:
            return { ...state, isLoading: false, response: null, error: action.payload };
        case CLEAR_PAGE_DATA:{
                return {
                    ...state,
                    response: [],
                }
        };
        default:
            return state;
    }
};
  
  