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
    const Projects = [
      {
          name: "Orbit App",
          image: "/Images/Orbit_Home.jpg",
          link: "OrbitApp",
          type: "Mobile App",
          shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. ",
          longDescription: "Orbit is an app designed to show you what events, activities, or just general gatherings are currently happening around you. It does this by making a white circle around the current area where you are in the city and shows you possible events you can race to."
      },
      {
          name: "Saltwater Fish Tank",
          image: "Images/FishTank_Home.jpg",
          link: "SaltWaterFishTank.html",
          type: "Application",
          shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. ",
      },
      {
          name: "Pocket Full Of Sunshine",
          image: "Images/Sunshine_Home.jpg",
          link: "PocketFullOfSunshine.html",
          type: "Movie Branding",
          shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. ",
      },
      {
          name: "Synesthesia Zine",
          image: "Images/Synesthesia_Home.jpg",
          link: "Synesthesia.html",
          type: "Zine Booklet",
          shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. ",
      },
      {
          name: "Renzo Piano Exhibit",
          image: "Images/RenzoPiano_Home.jpg",
          link: "RenzoPiano.html",
          type: "Exhibit Branding",
          shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. ",
      },
      {
          name: "Randsom Note Generator",
          image: "Images/Generator_Home.jpg",
          link: "RansomNote.html",
          type: "Creative Coding",
          shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. ",
      },
      {
          name: "Earth 2.0 Movie",
          image: "Images/Earth_Home.jpg",
          link: "Earth.html",
          type: "Movie Branding",
          shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. ",
      },
      {
          name: "Udelco",
          image: "Images/Udelco_Home.jpg",
          link: "Udelco.html",
          type: "Commercial Website",
          shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. ",
      },
      {
          name: "Motherboard",
          image: "Images/Motherboard_Home.jpg",
          link: "Motherboard.html",
          type: "Magazine",
          shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. ",
      }];

    return (
      <Router>
        <div class="wrapper">
          <Navbar/>
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/about"><About/></Route>
            <Route path="/portfolio"><Portfolio/></Route>
            <Route path="/resume"><Resume/></Route>
            <Route path="/contentPage"><ContentComponent name={Projects[1].name}/></Route>
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
