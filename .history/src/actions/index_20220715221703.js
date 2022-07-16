import axios from 'axios';

export function getSearchResult(url){
    return  (dispatch)=>{
             axios.get(url)
             .then(response => dispatch(sendToReducer(response.data.hits)))
             .catch(error => {
                const errorMsg = error.message;
                dispatch(sendErrorToReducer(errorMsg))
             })  
    }
}

function sendToReducer(hits){
    return{
        type:"SEARCH_RESULT",
        hits:hits
    }

}

function sendErrorToReducer(message){
    return{
        type:"SEARCH_FAILED",
        message:message
    }
}