import React, {Component} from 'react';
import '../../public/css/styleContent.css'; 
import '../../public/css/style.css'; 
import '../../public/css/Card.css';
import {Link} from "react-router-dom";

class ContentComponent extends Component{
    render(){  
        return (    
            <div class="Contentwrapper">
                <article class="main"><ContentMain/></article>
                <aside class="aside aside-1"><ContentInfo/></aside>
            </div>
        )
    }
}

function ContentInfo(){
    return(
        <div class="InfoPanel">
            <h1>Orbit Home</h1>
            <p>Orbit is an app designed to show you what events, activities, or just general gatherings are currently happening around you. It does this by making a white circle around the current area where you are in the city and shows you possible events you can race to.</p>  
            <Link to="/portfolio" class="button">back</Link>
        </div>
    )
}

function ContentMain() {
    return(
        <div>
            <img src="Images/Orbit_Home.jpg" class="contentImages" alt=""/>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
        </div>
    )
}

export default ContentComponent;
//<a href={this.props.link} class="button">Read More</a>