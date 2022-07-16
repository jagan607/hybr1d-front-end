import React,{useEffect, useState} from "react";
import {connect} from 'react-redux';
import { getSearchResult } from "../actions";


const [text, setText] = useState();

function SearchPage({searchResults, getSearchResult}){
    // useEffect(() => {
    //     getSearchResult()
    // }, [])
    return (
        <div class="container">
            <h1 style={{color:'#fff', marginTop:'15%', marginRight:'70%'}}>Find Pipl</h1>

        <div class="data-container">
                <span class="btn" onClick={this.handleSubmit}>Search</span>
        </div>
        <input type="text" onChange={this.handleChange} placeholder="Search Name"/>
        <div class="search"></div>
        <Post answers={this.state.answers} />
        </div>
    )
}

handleChange = event => setText(event.target.value)

handleSubmit = event,props => {
    event.preventDefault()
    let url = "https://hn.algolia.com/api/v1/search?query=" + text;
    getSearchResult(url)
    // axios.get(url)
    // .then(response => this.setState({ answers: response.data }));

    // this.setState({
    //     value: '',
    //     answers: []
    // })
};

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