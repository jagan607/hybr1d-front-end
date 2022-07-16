let defaultState = {
    hits:[],
    message:""
}

const mainReducer =(state = defaultState, action) =>{
    console.log(action.type);
    if(action.type == "SEARCH_RESULT"){
        return{
            ...state,
            hits:action.hits
        }
    }

    if(action.type == "SEARCH_RESULT_DESCRIPTION"){
        return{
            ...state,
            description:action.description
        }
    }
 
    if(action.type == "SEARCH_FAILED"){
        return{
            ...state,
            message:action.message
        }
    }
    else{
        return{ ...state}
    }
}

export default mainReducer;