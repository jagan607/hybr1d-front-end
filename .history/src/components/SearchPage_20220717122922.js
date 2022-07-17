import React,{useEffect, useState, useRef} from "react";
import {connect} from 'react-redux';
import { getSearchResult } from "../actions";
import ResultDescriptionPage from "./ResultDescriptionPage";



function SearchPage({searchResults,message, getSearchResult}){
    const [text, setText] = useState();
    const [isDescriptionShown, setIsDescriptionShown] = useState(false);
    const [postUrl, setPostUrl] = useState("");
    const myRef = useRef(null)

    const executeScroll = () => myRef.current.scrollIntoView()   

    const Post = props =>
	<div>
    {props?.searchResults?.length > 0 ? 
    <div>
         {props?.searchResults?.map((items, index) =>
        <div className='app-post' style={{cursor:"pointer"}} key={index} onClick={ () => handleClick(items.objectID)}>
          <a href={items.url}
             className='app-post__title'
             target='_blank'>{items.author}</a>
          <p className='app-post__extract'>{items.title}</p>
        </div>
    )}
    </div> 
    : 
    <div>
        <h1>{message}</h1>
    </div> }    
   
  </div>;

    function handleChange (event) {
        setText(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        const url = "https://hn.algolia.com/api/v1/search?query=" + text;
        getSearchResult(url);
        executeScroll

    };

    const handleClick = (objectID) => {
        console.log(objectID);
        setIsDescriptionShown(true);
        setPostUrl("https://hn.algolia.com/api/v1/items/"+objectID);
    }


    
    return (
        
        <div class="container">
        
            {isDescriptionShown? 
                <ResultDescriptionPage url={postUrl}/>: 

                <div>
                    <h1 style={{color:'#fff', marginTop:'15%', marginRight:'70%'}}>Find Blog</h1>
                    <div class="data-container">
                            <span class="btn" onClick={handleSubmit}>Search</span>
                    </div>
                    <input type="text" onChange={handleChange} placeholder="Type here.."/>
                    <div class="search"></div>
                    <Post ref={myRef} searchResults={searchResults}  />
                </div>
                }
        
        </div>
    )
}







const mapStateToProps = state => {
    return{
        searchResults : state.hits,
        message:state.message
    }
}

const mapDispatchToProps = dispatch => {

    return{
        getSearchResult: (url) => dispatch(getSearchResult(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchPage)