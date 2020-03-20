import React from 'react';

const Image=(props)=>{
    const ModalPopUp = (name, key) => {
        
    }

    return(
        <img src={props.name} className="contentImages" alt={props.name} onClick={() => 
            {
                ModalPopUp(props.name, props.imageKey)
            }} 
        />
    )
}
export default Image;