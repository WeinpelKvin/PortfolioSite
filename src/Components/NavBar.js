import React, {Component} from 'react';
import '../../public/css/style.css'

/*function menuFunction() {
    var x = document.getElementById("Navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}*/

class NavBar extends Component{
    render(){
        return (
            <div class="navbar" id="Navbar">
                <a href="index.html">Kevin Weinpel</a>
                <a href="#home">Portfolio</a>
                <a href="#news">About</a>
                <a href="#contact">Resume</a>
                <a class="icon" onclick="menuFunction()">
                    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" class="phoneMenu"/></svg>
                </a>
            </div>
        )
    }
}

export default NavBar;
