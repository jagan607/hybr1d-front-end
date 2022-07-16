import React,{useEffect} from "react";
import {connect} from 'react-redux';
import { getSearchResult } from "../actions";


function SearchPage({searchResults, getSearchResult}){
    useEffect(() => {
        getSearchResult()
    }, [])
    return searchResults? (
       <div>
            <h1>Search Results</h1>
            <div>
            {
                searchResults
            }
            </div>
        </div> 
        )
        :
        <h1>Sorry, try again later</h1>
}

const mapStateToProps = state => {

    return{
        searchResults : state.hits
    }
}

const mapDispatchToProps = dispatch => {

    return{
        getSearchResult: () => dispatch(getSearchResult())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchPage)