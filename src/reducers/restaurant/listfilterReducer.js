import { RESTAURANT_FILTER_REQUEST,RESTAURANT_FILTER_SUCCESS,RESTAURANT_FILTER_FAILURE,CLEAR_FILTER_DATA} from "../../actions/types";
const initialState={
    response:null,
    isLoading:false,
    error:null
};
export const listFilterReducer=(state=initialState,action)=>{
 switch(action.type){
    case RESTAURANT_FILTER_REQUEST:
        return{
            ...state,
            response:null,
            isLoading:true,
            error:null
        }
    case RESTAURANT_FILTER_SUCCESS:
        return{
            ...state,
            response:action.payload,
            isLoading:false,
            error:null
        }
    case RESTAURANT_FILTER_FAILURE:
        return{
            ...state,
            response:null,
            isLoading:false,
            error:action.payload
        }
    case CLEAR_FILTER_DATA:{
        return{
            ...state,
            response:[],
        }
    }
    default:
    return state;
    
 }
}