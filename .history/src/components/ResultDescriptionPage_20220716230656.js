import React,{useState, useEffect} from 'react';
import { getResultDescription } from "../actions";
import {connect} from 'react-redux';

function  ResultDescriptionPage({getResultDescription, url, description}){
    const [text, setText] = useState();

    useEffect( () => {
        getResultDescription(url);
    }, [])

    return(
        <div>
            <h1>{description?.title}</h1>
            <h3>{description?.points} Points</h3>
            <h2>Comments</h2>
            <div>
            {
                description?.children?.map((items, index) => {
                    // console.log(item.text);
                    // <p>{item.text}</p>

                    <div className='app-post' key={index}>
                    <a href={items.author}
                        className='app-post__title'
                        target='_blank'>{items.author}</a>
                    <p className='app-post__extract'>{items.text}</p>
                    </div>

            })
            }
            </div>
        </div>
    )

}



const mapStateToProps = state =>{
    console.log(state.description);
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