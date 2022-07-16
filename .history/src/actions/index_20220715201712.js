import axios from "axios";

export function getSearchResult(){
    return (dispatch)=>{
        return axios.get("https://hn.algolia.com/api/v1/search?query=test").then((response)=>{
            dispatch(sendToReducer(response.data.hits))
        })
        .catch((error) => {
            const errorMsg = error.message;
            dispatch(sendToReducer(errorMsg))
        })
    }
}

function sendToReducer(hits){
    return{
        type:"SEARCH_RESULT",
        hits:hits
    }

}