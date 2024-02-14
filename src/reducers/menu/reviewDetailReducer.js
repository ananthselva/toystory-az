import { REVIEW_DETAIL_REQUEST, REVIEW_DETAIL_SUCCESS, REVIEW_DETAIL_FAILURE } from '../../actions/types';

// reducer.js
const initialState = {
    isLoading: false,
    response: null,
    error: null
};
  
export const reviewDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case REVIEW_DETAIL_REQUEST:
            return { ...state, isLoading: true, response: null, error: null };
        case REVIEW_DETAIL_SUCCESS:
            return { ...state, isLoading: false, response: action.payload, error: null };
        case REVIEW_DETAIL_FAILURE:
            return { ...state, isLoading: false, response: null, error: action.payload };
        default:
            return state;
    }
};
  
  