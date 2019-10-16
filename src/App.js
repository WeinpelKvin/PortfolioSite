import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//import {Router, Route, IndexRoute} from "react-router";
//IndexRoute

import './App.css';
import './index.css';
import '../public/css/style.css'

import Navbar from './Components/NavBar.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import ProjectsComponent from './Components/ProjectsComponent';
import ContentComponent from './Components/ContentComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div class="wrapper">
          <Navbar/>
          
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/about"><About/></Route>
            <Route path="/portfolio"><Portfolio/></Route>
            <Route path="/resume"><Resume/></Route>
            <Route path="/contentPage" component={ContentComponent}></Route>
          </Switch>     

          <Footer/>
        </div>
      </Router>
    );
  }
}

function Home(){  
  return(
    <div>          
      <Header/>
      <ProjectsComponent/>    
    </div>
  );
}

function About(){
  return(
    <h1>About</h1>
  );
}

function Resume(){
  return(
    <h1>Resume</h1>
  );
}

function Portfolio(){
  return(
    <ProjectsComponent/>
  );
}

export default App;
