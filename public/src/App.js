import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Map from './pages/Map';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/map" component={Map}/>
          <Route exact path="/profile" component={Profile}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
