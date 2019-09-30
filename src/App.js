import React, { Component } from 'react';
//import {Router, Route, IndeRoute, hashHistory} from "react-router";

import './App.css';
import './index.css';
import '../public/css/style.css'

import Navbar from './Components/NavBar.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import MainComponent from './Components/MainComponent.js';

class App extends Component {
  render() {
    return (
      <div class="wrapper">
        <Navbar/>
        <Header/>
        <MainComponent/>
        <Footer/>
      </div>
    );
  }
}

export default App;
