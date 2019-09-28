import React, {Component} from 'react';
import '../../public/css/style.css'; 
import '../../public/css/Card.css';
    
class Card extends Component{
    render(){  
        return (              
            <div class="card">
                <img src={this.props.image} alt="" class="mainImages"/>
                <div class="overlay">
                    <div class="cardText">
                        <h3>{this.props.type}</h3>
                        <h1>{this.props.name}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. </p>
                        <a href={this.props.link} class="button">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;