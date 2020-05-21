import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../../public/css/style.css' 
import Mug from '../../public/Images/Icons/mug.svg'
    
class Header extends Component {
    render() {
        const ImageStyle = {
            width: '100px',
        };
        const Me = "Kevin Weinpel"
        return (
            <header className="header">
                <div className="handImage columnHalf">
                    <img src={Mug} style={ImageStyle} alt=""></img>
                </div>
                <div className="headerText column">
                    <h1>{Me}</h1>
                    <h2>UX / UI Designer located in Dallas, Texas. Experienced in design, programming, and what falls in between.</h2>
                    <Link to="/portfolio" className="button buttonHeader">See My Work</Link>
                </div>
                <div className="headerSubtext columnHalf">
                    <p><strong>email</strong><br /> kevinweinpel@gmail.com</p>                    
                    <p><strong>phone</strong><br /> 973-945-7056</p>
                    <p>Scroll down to see my design portfolio or view some of my other informatiom through my social media.</p>
                    <p>Thanks for stopping by</p>
                </div>
            </header>
        )
    }
}

export default Header;