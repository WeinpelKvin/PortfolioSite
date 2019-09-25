import React, {Component} from 'react';
import '../../public/css/style.css' 
    
class Card extends Component{
    render(){  
        return (              
            <div class="card">
                <img src={this.props.image} alt="" class="mainImages"/>
                <div class="cardText">
                    <h3>{this.props.type}</h3>
                    <h1 class="cardTitle">{this.props.name}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel tempor lorem metus quis mauris. Fusce scelerisque est vel libero suscipit fringilla. Aenean venenatis at magna ut rhoncus. Fusce consequat ipsum et vehicula sodales. Maecenas dui lorem, ornare in molestie id, aliquam condimentum metus. In ac tellus a lacus pellentesque porta id id justo. Vivamus semper a urna et dignissim. Sed efficitur ex nec vehicula egestas. Nulla congue ante ut erat commodo facilisis id nec ante. </p>
                    <a href={this.props.link} class="button">Read More</a>
                </div>
            </div>
        )
    }
}

export default Card;