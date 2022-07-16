let defaultState = {
    hits:[],
    message:""
}

const mainReducer =(state = defaultState, action) =>{
    if(action.type == "SEARCH_RESULT"){
        return{
            ...state,
            hits:action.hits
        }
    }
 
    if(action.type == "SEARCH_FAILED"){
        return{
            ...state,
            hits:action.message
        }
    }
    else{
        return{ ...state}
    }
}

export default mainReducer;