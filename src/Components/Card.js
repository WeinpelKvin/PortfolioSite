import React, {Component} from 'react';
import '../../public/css/style.css'; 
import '../../public/css/Card.css';
import {Link} from "react-router-dom";
import Projects from '../Projects.json';   
    
class Card extends Component{
    render(){  
        const cardInfo = Projects[this.props.cardInfo.key];

        return (              
            <div className="card fade-in">
                <img src={cardInfo.image} alt="" className="mainImages"/>
                <div className="overlay">
                    <div className="cardText">
                        <h3>{cardInfo.type}</h3>
                        <h1>{cardInfo.name}</h1>
                        <p>{cardInfo.shortDescription}</p>
                        <Link to={{
                            pathname: "/contentPage",
                            params: {   
                                key: cardInfo.key,
                                name: cardInfo.name,
                                image: cardInfo.image,
                                type: cardInfo.type,
                                shortDescription: cardInfo.shortDescription,
                                longDescription: cardInfo.longDescription,
                                content: cardInfo.content
                            }
                        }} className="button">Read More</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;