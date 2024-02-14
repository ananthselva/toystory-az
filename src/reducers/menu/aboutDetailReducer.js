import { ABOUT_DETAIL_REQUEST, ABOUT_DETAIL_SUCCESS, ABOUT_DETAIL_FAILURE } from '../../actions/types';

// reducer.js
const initialState = {
    isLoading: false,
    response: null,
    error: null
};
  
export const aboutDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case ABOUT_DETAIL_REQUEST:
            return { ...state, isLoading: true, response: null, error: null };
        case ABOUT_DETAIL_SUCCESS:
            return { ...state, isLoading: false, response: action.payload, error: null };
        case ABOUT_DETAIL_FAILURE:
            return { ...state, isLoading: false, response: null, error: action.payload };
        default:
            return state;
    }
};
  
  