import React,{useEffect, useState} from "react";
import {connect} from 'react-redux';
import { getSearchResult } from "../actions";
import ResultDescriptionPage from "./ResultDescriptionPage";



function SearchPage({searchResults, getSearchResult}){
    const [text, setText] = useState();
    const [isDescriptionShown, setIsDescriptionShown] = useState(false);
    const [postUrl, setPostUrl] = useState("12701272");

    const Post = props =>
	<div>
    {props?.searchResults?.map((items, index) =>
        <div className='app-post' key={index} onClick={handleClick(items.objectID)}>
          <a href={items.url}
             className='app-post__title'
             target='_blank'>{items.author}</a>
          <p className='app-post__extract'>{items.title}</p>
        </div>
    )}
  </div>;

    function handleChange (event) {
        setText(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        const url = "https://hn.algolia.com/api/v1/search?query=" + text;
        getSearchResult(url);

    };

    const handleClick = (event,objectID) => {
        event.preventDefault();
        console.log(objectID);
        setIsDescriptionShown(true);
        setPostUrl("https://hn.algolia.com/api/v1/items/"+objectID);
    }


    
    return (
        
        <div class="container">
            <h1 style={{color:'#fff', marginTop:'15%', marginRight:'70%'}}>Search</h1>
        
        {isDescriptionShown? 
        <ResultDescriptionPage url={postUrl}/>: 

        <div>
            <div class="data-container">
                    <span class="btn" onClick={handleSubmit}>Search</span>
            </div>
            <input type="text" onChange={handleChange} placeholder="Type here.."/>
            <div class="search"></div>
            <Post searchResults={searchResults}  />
        </div>
        }
        
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
        getSearchResult: (url) => dispatch(getSearchResult(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchPage)