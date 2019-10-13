import React, {Component} from 'react';
import '../../public/css/style.css' 
    
class Header extends Component {
    render() {
        return (
            <header class="header">
                <h1 class="headerText">I'm a Product Designer in Dallas, Texas most interested in design, programming, and what falls in between.</h1>
                <p class="headerSubtext">Scroll down to see my design portfolio or view some of my other informatiom through my social media.</p>
            </header>
        )
    }
}

export default Header;