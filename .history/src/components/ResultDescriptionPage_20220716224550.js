import React,{useState, useEffect} from 'react';
import { getResultDescription } from "../actions";
import {connect} from 'react-redux';

function  ResultDescriptionPage({getResultDescription, url, description}){
    const [text, setText] = useState();

    useEffect( () => {
        console.log(url);
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

export default connect(mapStateToProps, mapDispatchToProps) ( ResultDescriptionPage)