import { RESTAURANT_CUISINES_REQUEST,RESTAURANT_CUISINES_SUCCESS,RESTAURANT_CUISINES_FAILURE,CLEAR_CUISINES_DATA} from "../../actions/types";
// reducer.js
const initialState = {
    isLoading: false,
    response: null,
    error: null
};
export const listCusinesReducer=(state=initialState,action)=>{
    switch(action.type){
 case RESTAURANT_CUISINES_REQUEST: 
     return { ...state, isLoading: true, response: null, error: null };
 case RESTAURANT_CUISINES_SUCCESS: 
    return { ...state, isLoading: false, response: action.payload, error: null };
 case RESTAURANT_CUISINES_FAILURE: 
    return { ...state, isLoading: false, response: null, error: action.payload };
 case CLEAR_CUISINES_DATA:
    return {...state,response:[]};
 default:
     return state;
 }

 }