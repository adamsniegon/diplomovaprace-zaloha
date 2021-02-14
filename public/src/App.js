import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './parts/Header';
import Home from './pages/Home';
import Map from './pages/Map';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Router>
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
