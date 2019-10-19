import React, {Component} from 'react';
import '../../public/css/style.css'; 
import '../../public/css/Card.css';
import {Link} from "react-router-dom";
    
class Card extends Component{
    render(){  
        return (              
            <div className="card fade-in">
                <img src={this.props.cardInfo.image} alt="" className="mainImages"/>
                <div className="overlay">
                    <div className="cardText">
                        <h3>{this.props.cardInfo.type}</h3>
                        <h1>{this.props.cardInfo.name}</h1>
                        <p>{this.props.cardInfo.shortDescription}</p>
                        <Link to={{
                            pathname: "/contentPage",
                            params: {   
                                name: this.props.cardInfo.name,
                                image: this.props.cardInfo.image,
                                type: this.props.cardInfo.type,
                                shortDescription: this.props.cardInfo.shortDescription,
                                longDescription: this.props.cardInfo.longDescription
                            }
                            }} className="button">Read More</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
//<a href={this.props.link} class="button">Read More</a>