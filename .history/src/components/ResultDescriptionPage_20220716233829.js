import React,{useState, useEffect} from 'react';
import { getResultDescription } from "../actions";
import {connect} from 'react-redux';

function  ResultDescriptionPage({getResultDescription, url, description, message}){
    useEffect( () => {
        getResultDescription(url);
    }, [])

    return(
        
        <div>
            {description?.children?.length > 0 ? <div>
                <h1 style={{color:"white"}}>{description?.title}</h1>
                <h3 style={{color:"white"}}>{description?.points} Points</h3>
                <div style={{marginTop:"20%"}}>
                    <h2 style={{color:"white"}}>Comments</h2>
                    
                    {description?.children?.map((items, index) => 
                        
                            <div className='app-post' key={index}>
                            <p className='app-post__extract'>{items.text}</p>
                            </div>
                    )}

                </div>
            </div>:
            <div> 
                {message? <h1>{message}</h1> : <h1>Loading...</h1>}
                
            </div>
           }
            
            
        </div>
    )

}



const mapStateToProps = state =>{
    console.log(state.description);
    return{
        description : state.description,
        message : state.message
    }

}

const mapDispatchToProps = dispatch => {

    return {
        getResultDescription : (url) => dispatch(getResultDescription(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) ( ResultDescriptionPage)