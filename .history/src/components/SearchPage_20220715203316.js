import Reacr,{useEffect} from "react";
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