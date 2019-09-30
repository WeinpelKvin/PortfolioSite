import React, { Component } from 'react';
import {Router, Route, hashHisotry, IndexRoute} from "react-router";
//IndexRoute

import './App.css';
import './index.css';
import '../public/css/style.css'

import Navbar from './Components/NavBar.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';

import MainComponent from './Components/MainComponent.js';
import Projects from './Components/Projects_Component';

class App extends Component {
  render() {
    return (
      <div class="wrapper">
        <Navbar/>
        <Header/>
        <MainComponent></MainComponent>
        <Footer/>
      </div>
    );
  }
}

export default App;

/*<Router history={hashHisotry}>
          <Route path="/" component={MainComponent}>
            <IndexRoute component={Projects}></IndexRoute>
          </Route>
        </Router>*/
