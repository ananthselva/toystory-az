import { autocompleteApi } from "../../api/autocomplete/autocompleteRequestApi";
import { AUTOCOMPLETE_SUCCESS,AUTOCOMPLETE_FAILURE,MERGE_VALUES,CLEAR_DATA } from "../types";

export const autocompleteSuccess=(data)=>({
    type: AUTOCOMPLETE_SUCCESS,
    payload: data
})
export const autocompleteDataClear=()=>({
  type: CLEAR_DATA,
})
export const autocompleteMergeSuccess=(data)=>({
  type: MERGE_VALUES,
  payload: data
})

export const autocompleteFailure=(eror)=>({
    type: AUTOCOMPLETE_FAILURE,
    payload: eror
})
export const autocompleteRequest=(postData)=>{

    return (dispatch)=>{
        autocompleteApi(postData)
          .then((response) => {
           if(postData.limit===1){
             dispatch(autocompleteSuccess(response.data.data))
            }
            else{
            
              dispatch(autocompleteMergeSuccess(response.data.data));
            }
             
          })
          .catch((error) => {
           
            dispatch(autocompleteFailure(error.message));
           
          });
        }
}
