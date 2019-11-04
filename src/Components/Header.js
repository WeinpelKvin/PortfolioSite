import React, {Component} from 'react';
import '../../public/css/style.css' 
    
class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1 className="headerText">I'm a Designer in Dallas, Texas most interested in design, programming, and what falls in between.</h1>
                <p className="headerSubtext">Scroll down to see my design portfolio or view some of my other informatiom through my social media.</p>
            </header>
        )
    }
}

export default Header;