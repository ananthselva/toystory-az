import { RESTAURANT_FILTER_SUCCESS,RESTAURANT_FILTER_REQUEST,RESTAURANT_FILTER_FAILURE,CLEAR_FILTER_DATA } from "../types";
import { FilterApi } from "../../api/restaurant/listfilterApi";
export const getFilterRequest=()=>({
    type:RESTAURANT_FILTER_REQUEST
});
export const getFilterSuccess=(data)=>({
    type:RESTAURANT_FILTER_SUCCESS,
    payload:data
});
export const getFilterFailure=(err)=>({
    type:RESTAURANT_FILTER_FAILURE,
    payload:err
});
export const getFilterClear=()=>({
    type:CLEAR_FILTER_DATA
});
export const getFilter=(formdata)=>{
    return(dispatch)=>{
       dispatch(getFilterRequest());
       FilterApi(formdata)
       .then((res)=>{
        console.log(res);
        if(res.data.status==true){
         dispatch(getFilterSuccess(res.data.data));
        }else{
        dispatch(getFilterFailure(res.data.message));
        }
       })
       .catch((err)=>{
        dispatch(getFilterFailure(err.message));
       })
    }
}
