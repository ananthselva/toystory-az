import { SEND_APP_LINK_REQUEST, SEND_APP_LINK_SUCCESS, SEND_APP_LINK_FAILURE } from '../../actions/types';

// reducer.js
const initialState = {
    isLoading: false,
    response: null,
    error: null
};
  
export const sendAppLinkReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_APP_LINK_REQUEST:
            return { ...state, isLoading: true, response: null, error: null };
        case SEND_APP_LINK_SUCCESS:
            return { ...state, isLoading: false, response: action.payload, error: null };
        case SEND_APP_LINK_FAILURE:
            return { ...state, isLoading: false, response: null, error: action.payload };
        default:
            return state;
    }
};
  
  