import { MENU_DETAIL_REQUEST, MENU_DETAIL_SUCCESS, MENU_DETAIL_FAILURE } from '../../actions/types';

// reducer.js
const initialState = {
    isLoading: false,
    response: null,
    error: null
};
  
export const menuDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case MENU_DETAIL_REQUEST:
            return { ...state, isLoading: true, response: null, error: null };
        case MENU_DETAIL_SUCCESS:
            return { ...state, isLoading: false, response: action.payload, error: null };
        case MENU_DETAIL_FAILURE:
            return { ...state, isLoading: false, response: null, error: action.payload };
        default:
            return state;
    }
};
  
  