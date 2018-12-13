import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeSearch from "./pages/HomeSearch";
import Nav from "./components/Nav/index"

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Switch>
            <Route exact path="/" component={HomeSearch}/>
          </Switch>
          </div>

      </Router>
    );
  }
}

export default App;
