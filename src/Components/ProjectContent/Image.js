import React from 'react';

const Image=(props)=>{

    return(
        <img src={props.name} className="contentImages" alt={props.name}
        />
    )
}
export default Image;