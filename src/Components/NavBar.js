import React, {Component} from 'react';
import '../../public/css/navBar.css';
import {Link} from "react-router-dom";

class NavBar extends Component{  
    constructor(props) {
        super(props);
        this.state = {responsive: false};
    }
    render(){

        function menuPopup(){
            var x = document.getElementById("Navbar");
            if (x.className === "navbar") {
                x.className += " responsive";
            } else {
                x.className = "navbar";
            }
        }

        function collapse(){
            var x = document.getElementById("Navbar");
            if (x.className === "navbar responsive"){
                x.className = "navbar";
            }
        }
        return (
            <div className="navbar" id="Navbar">
                <Link to="/" className="navHome">Kevin Weinpel</Link>
                <Link to="/portfolio" className="navItem" onClick={collapse}>Portfolio</Link>
                <Link to="/about" className="navItem" onClick={collapse}>About</Link>
                <Link to="/resume" className="navItem" onClick={collapse}>Resume</Link>
                <a className="icon navItem" id="menuBtn" onClick={menuPopup}>
                    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" className="phoneMenu"/></svg>
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
//                        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" className="phoneMenu"/></svg>
export default NavBar;
