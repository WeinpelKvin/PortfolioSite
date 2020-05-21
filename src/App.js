import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import './index.css';
import '../public/css/style.css'
import '../public/css/styleContent.css'

import Navbar from './Components/NavBar.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import ProjectsComponent from './Components/ProjectsComponent';
import ContentComponent from './Components/ContentComponent';
import ScrollToTop from './Components/ScrollToTop';
import ResumeItem from './Components/ResumeItem';

import Projects from '../package.json';

class App extends Component {
  render() {

    window.scroll(function() { 
      const nav = document.getElementsById('Navbar');
      console.log(nav + "yes");
    });
    
    return (
      <Router>
        <ScrollToTop>
          <div className="wrapper">
            <Navbar/>
            
            <Switch>
              <Route exact path="/"><ScrollToTop><Home/></ScrollToTop></Route>
              <Route path="/about"><ScrollToTop><About/></ScrollToTop></Route>
              <Route path="/portfolio"><ScrollToTop><Portfolio/></ScrollToTop></Route>
              <Route path="/resume"><ScrollToTop><Resume/></ScrollToTop></Route>
              <Route path="/contentPage" component={ContentComponent}></Route>
            </Switch>     

            <Footer Projects={Projects}/>
          </div>
        </ScrollToTop>
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
  const work = [
    {
      "key": 0,
      "name": "NBC Universal: Syfy Channel",
      "role": "Creative Marketing Intern",
      "year": "2016-2017",
      "date": "September - September",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum orci quis ipsum rutrum, ut hendrerit dui placerat. Suspendisse venenatis sodales neque, sit amet egestas odio eleifend sed.",
      "responsibilities": [
        "Edited photos, videos, and other content for various brands of NBC.",
        "Aided photographers on NBC photo shoots and other events.",
        "Collaborated with the designers and copywriters to expedite creative timelines",
        "Assisted in producing weekly reports and manage creative requests",
        "Created creative merchandise for the various Syfy shows, ie. bags, t-shirts, posters, banners, luggage tags, etc."
      ]
    }
  ]
  return(
    <div className="Contentwrapper">
      <article className="aside aside-1">
        <div className="infoPanel">
          hi
        </div>
      </article>
      <ResumeItem workplace={work[0]}/>
    </div>
  );
}

function Portfolio(){
  return(
    <ProjectsComponent/>
  );
}

export default App;
