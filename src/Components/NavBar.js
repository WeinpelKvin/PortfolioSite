import React, {Component} from 'react';
import '../../public/css/navBar.css';
import {Link} from "react-router-dom";
//import Menu from './Menu.js';    


// var x = document.getElementById("Navbar");
// if (x.className === "navbar") {
//     x.className += " responsive";
// } else {
//     x.className = "navbar";
// }

class NavBar extends Component{  
    render(){
        return (
            <div class="navbar" id="Navbar">
                <Link to="/" class="navHome">Kevin Weinpel</Link>
                <Link to="/portfolio" class="navItem">Portfolio</Link>
                <Link to="/about" class="navItem">About</Link>
                <Link to="/resume" class="navItem">Resume</Link>
                <a class="icon navItem" id="menuBtn" >
                    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" class="phoneMenu"/></svg>
                </a>
            </div>
        )
    }
       
    // menuFunction() {
    //     console.log("I was clicked");
    // }
}

// function Listener(){ 
//     const menuBtn = document.getElementById("menuBtn");
//     return menuBtn.addEventListener('click', NavBar.myFunction, false);
// }
export default NavBar;
