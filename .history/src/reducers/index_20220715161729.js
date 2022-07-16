let defaultState = {
    hits:[]
}

const mainReducer =(state = defaultState, action) =>{
    if(action.type == "SEARCH_RESULT"){
        return{
            ...state,
            hits:action.hits
        }
    }
    else{
        return{ ...state}
    }
}

export default mainReducer;