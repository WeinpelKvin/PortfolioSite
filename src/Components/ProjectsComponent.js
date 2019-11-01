import React, {Component} from 'react';
import '../../public/css/style.css' 
import Card from './Card.js'; 
import Projects from '../Projects.json';   
 
class Projects_Component extends Component{
    render(){
        const pieces = [];
        for (let i = 0; i < Projects.length; i++) {
            pieces.push(<Card key={i} cardInfo={Projects[i]}/>)
        }
        return (
            <div className="main wrapper">
                {pieces}
            </div>
        )
    }
}

export default Projects_Component;