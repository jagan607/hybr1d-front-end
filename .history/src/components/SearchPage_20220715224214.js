import React,{useEffect, useState} from "react";
import {connect} from 'react-redux';
import { getSearchResult } from "../actions";





function SearchPage({searchResults, getSearchResult}){
    const [text, setText] = useState();

    const Post = props =>
	<div>
    {props?.searchResults?.map((items, index) =>
        <div className='app-post' key={index}>
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

    function handleSubmit() {
        let url = "https://hn.algolia.com/api/v1/search?query=" + text;
        getSearchResult(url)

    };

    return (
        <div class="container">
            <h1 style={{color:'#fff', marginTop:'15%', marginRight:'70%'}}>Search</h1>

        <div class="data-container">
                <span class="btn" onClick={handleSubmit}>Search</span>
        </div>
        <input type="text" onChange={handleChange} placeholder="Search Name"/>
        <div class="search"></div>
        <Post answers={searchResults} />
        </div>
    )
}







const mapStateToProps = state => {
    console.log(state.hits)
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