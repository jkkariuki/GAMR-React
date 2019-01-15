import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeSearch from "./pages/HomeSearch";
import Saved from "./pages/SavedGames";
import Nav from "./components/Nav/index";
import BackgroundSlideShow from "react-background-slideshow";
import logo from './logo.svg';
import './App.css';
import image2 from './images/img2.jpg';
import image3 from './images/img3.jpg';
import image5 from './images/img5.jpg';


class App extends Component {
  render() {
    return (
      <Router>

        <div>
        <BackgroundSlideShow images={[image2, image3, image5]}>
        
        <Nav/>

            <Route exact path="/" component={HomeSearch}/>
            <Route exact path="/saved" component={Saved} />
        
        </BackgroundSlideShow>
        
        </div>

      </Router>
    );
  }
}

export default App;
