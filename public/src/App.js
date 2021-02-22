import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Map from './pages/Map/Map';
import Profile from './pages/Profile/Profile';
import CityList from './pages/CitiesList/CitiesList';
import PlaceDetail from './pages/PlaceDetail/PlaceDetail';
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
        <Route path="/cities/:cityId" component={CityList}/>
        <Route path="/places/:placeId" component={PlaceDetail}/>
      </Router>
    </div>
  );
}

export default App;
