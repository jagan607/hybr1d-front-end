import React,{useState, useEffect} from 'react';
import { getResultDescription } from "../actions";
import {connect} from 'react-redux';

export default function  ResultDescriptionPage({getResultDescription, url, description}){
    const [text, setText] = useState();

    useEffect( () => {
        getResultDescription(url);
    })

    return(
        <div>
            <h1>{description.title}</h1>
            <h3>{description.points} Points</h3>
            <h2>Comments</h2>
            {
                description?.children?.map((item, index) => {
                    <div>
                        {item.text}
                    </div>
            })
            }
        </div>
    )

}



const mapStateToProps = state =>{

    return{
        description : state.description
    }

}

const mapDispatchToProps = dispatch => {

    return {
        getResultDescription : (url) => dispatch(getResultDescription(url))
    }
}