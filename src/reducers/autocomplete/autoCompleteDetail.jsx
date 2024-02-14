import {AUTOCOMPLETE_SUCCESS,ABOUT_DETAIL_FAILURE,MERGE_VALUES,CLEAR_DATA } from "../../actions/types"
const initialState = {
    autocompletedetail: [],
    error: null,
    isLoading: false,
  };
export const AutocompleteReducer=(state=initialState,action)=>{
    switch(action.type){
         case CLEAR_DATA:{
             return {
                 ...state,
                 autocompletedetail: [],
             }
         };
        case AUTOCOMPLETE_SUCCESS:
            return {
                ...state,
                autocompletedetail: [],
                autocompletedetail: action.payload,
                isLoading: false,
                error: null,
              };
            case MERGE_VALUES:
                return{
                ...state,
                autocompletedetail:[...state.autocompletedetail,...action.payload],
                isLoading: false,
                error:null
            };
        case ABOUT_DETAIL_FAILURE:
            return{
                ...state,
                autocompletedetail:null,
                isLoading: false,
                error:action.payload
            };
        default:
            return state
    };
};