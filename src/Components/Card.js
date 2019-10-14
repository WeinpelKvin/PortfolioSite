import React, {Component} from 'react';
import '../../public/css/style.css'; 
import '../../public/css/Card.css';
import {Link} from "react-router-dom";
    
class Card extends Component{
    render(){  
        return (              
            <div class="card fade-in">
                <img src={this.props.image} alt="" class="mainImages"/>
                <div class="overlay">
                    <div class="cardText">
                        <h3>{this.props.type}</h3>
                        <h1>{this.props.name}</h1>
                        <p>{this.props.shortDescription}</p>
                        <Link to="/contentPage" class="button">Read More</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
//<a href={this.props.link} class="button">Read More</a>