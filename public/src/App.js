import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {dataFetch} from './store/actions/dataActions';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Map from './pages/Map/Map';
import Profile from './pages/Profile/Profile';
import Cities from './pages/Cities/Cities';
import Places from './pages/Places/Places';
import CityDetail from './pages/CityDetail/CityDetail';
import PlaceDetail from './pages/PlaceDetail/PlaceDetail';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataFetch());
  }, []);

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
        <Route exact path="/cities" component={Cities}/>
        <Route exact path="/cities/:cityId" component={CityDetail}/>
        <Route exact path="/places" component={Places}/>
        <Route exact path="/places/:placeId" component={PlaceDetail}/>
      </Router>
    </div>
  );
}

export default App;
