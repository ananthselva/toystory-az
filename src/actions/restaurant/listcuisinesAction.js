import { RESTAURANT_CUISINES_REQUEST,RESTAURANT_CUISINES_SUCCESS,RESTAURANT_DETAIL_FAILURE,CLEAR_CUISINES_DATA} from "../types";
import { listcuisinesApi } from "../../api/restaurant/listcuisinesApi";
export const getCuisinesRequest=()=>({
    type:RESTAURANT_CUISINES_REQUEST
});
export const getCuisinesSuccess=(data)=>({
    type:RESTAURANT_CUISINES_SUCCESS,
    payload:data
});
export const getCuisinesFailure=(error)=>({
    type:RESTAURANT_DETAIL_FAILURE,
    payload:error
})
export const getCuisinesClear=()=>({
    type:CLEAR_CUISINES_DATA
});
export const getCuisines=(formdata)=>{
    return(dispatch)=>{
       dispatch(getCuisinesRequest());
       listcuisinesApi(formdata)
       .then((res)=>{
        if(res.data.status==true){
         dispatch(getCuisinesSuccess(res.data.data));
        }else{
        dispatch(getCuisinesFailure(res.data.message));
        }
       })
       .catch((err)=>{
        dispatch(getCuisinesFailure(err.message));
       })
    }
}