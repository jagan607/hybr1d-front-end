import axios from 'axios';

export function getSearchResult(){
    return async (dispatch)=>{
        try {
            const response = await axios.get("https://hn.algolia.com/api/v1/search?query=test");
            dispatch(sendToReducer(response.data.hits));
        } catch (error) {
            const errorMsg = error.message;
            dispatch(sendErrorToReducer(errorMsg));
        }
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