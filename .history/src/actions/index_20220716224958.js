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

export function getResultDescription(url){
    return (dispatch) => {
        axios.get(url)
        .then(response => dispatch(sendResultToReducer(response.data)))
        .catch(error => {
            const errorMsg = error.message;
            dispatch(sendErrorToReducer(errorMsg))
        })
    }

}

function sendResultToReducer(description){
    return{
        type:"SEARCH_RESULT_DESCRIPTION",
        description:description
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