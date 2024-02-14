import { CART_DETAIL_SUCCESS, CART_DETAIL_FAILURE } from '../../actions/types';

// reducer.js
const initialState = {
    isLoadingCart: false,
    cartData: null,
    error: null
};

export const cartDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_DETAIL_SUCCESS:
            return { ...state, isLoading: false, cartData: action.payload, error: null };
        case CART_DETAIL_FAILURE:
            return { ...state, isLoading: false, cartData: null, error: action.payload };
        default:
            return state;
    }
};