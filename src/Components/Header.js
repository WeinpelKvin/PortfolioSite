import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../../public/css/style.css' 
    
class Header extends Component {
    render() {
        const ImageStyle = {
            width: '100px',
        };
        return (
            <header className="header">
                <div className="handImage columnHalf">
                    <img src="https://www.factsonhand.com/images/1/hand-nodules@3x_1113x1020.png" style={ImageStyle} alt=""></img>
                </div>
                <div className="headerText column">
                    <h1>Kevin Weinpel</h1>
                    <h2>UX / UI Designer in Dallas, Texas creating design, programming, and what falls in between.</h2>
                    <Link to="/portfolio" className="button buttonHeader">See My Work</Link>
                </div>
                <div className="headerSubtext columnHalf">
                    <p>Scroll down to see my design portfolio or view some of my other informatiom through my social media.</p>
                    <p>Thanks for stopping by</p>
                </div>
            </header>
        )
    }
}

export default Header;