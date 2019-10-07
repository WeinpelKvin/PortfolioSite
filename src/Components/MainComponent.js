import React from 'react';
import '../../public/css/style.css' 
import Projects from './Projects_Component';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
    
export default function MainComponent(){
    return (
        <Router>
            <div>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
                </ul>
            
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
            </div>
        </Router>
    )
}

function Home() {
    return (
      <Projects></Projects>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }

  function Topics() {
    return (
      <div>
        <h2>Topics</h2>
      </div>
    );
  }