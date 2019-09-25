import React, { Component } from 'react';

import './App.css';
import './index.css';
import '../public/css/style.css'

import Navbar from './Components/NavBar.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Card from './Components/Card.js';

// Projects
let Projects = [
  {
    name: "Orbit App",
    image: "/Images/Orbit_Home.jpg",
    link: "OrbitApp.html",
    type: "Mobile App"
  },
  {
    name: "Saltwater Fish Tank",
    image: "Images/FishTank_Home.jpg",
    link: "SaltWaterFishTank.html",
    type: "Application"
  },
  {
    name: "Pocket Full Of Sunshine",
    image: "Images/Sunshine_Home.jpg",
    link: "PocketFullOfSunshine.html",
    type: "Movie Branding"
  },
  {
    name: "Synesthesia Zine",
    image: "Images/Synesthesia_Home.jpg",
    link: "Synesthesia.html",
    type: "Zine Booklet"
  },
  {
    name: "Renzo Piano Exhibit",
    image: "Images/RenzoPiano_Home.jpg",
    link: "RenzoPiano.html",
    type: "Exhibit Branding"
  },
  {
    name: "Randsom Note Generator",
    image: "Images/Generator_Home.jpg",
    link: "RansomNote.html",
    type: "Creative Coding"
  },
  {
    name: "Earth 2.0 Movie",
    image: "Images/Earth_Home.jpg",
    link: "Earth.html",
    type: "Movie Branding"
  },
  {
    name: "Udelco",
    image: "Images/Udelco_Home.jpg",
    link: "Udelco.html",
    type: "Commercial Website",
    description: "A desktop and mobile website design for a thrift store in Hawthorne New Jersey that was found in the '70s. They specialize in vintage clothes from the '60s, '70s, and '80s."
  },
  {
    name: "Motherboard",
    image: "Images/Motherboard_Home.jpg",
    link: "Motherboard.html",
    type: "Magazine"
  }
]

const pieces = [];

for (let i = 0; i < Projects.length; i++) {
  pieces.push(<Card name={Projects[i].name} image={Projects[i].image} link={Projects[i].link} type={Projects[i].type}/>)
}

console.log(pieces);

class App extends Component {
  render() {
    return (
      <div class="wrapper">
        <Navbar/>
        <Header/>
        <div class="main wrapper">{pieces}</div>
        <Footer/>
      </div>
    );
  }
}

export default App;
