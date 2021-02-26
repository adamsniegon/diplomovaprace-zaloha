import React from 'react';
import {useSelector} from 'react-redux';
import {Link, NavLink} from 'react-router-dom';
import CitiesList from '../../components/CitiesList/CitiesList';
import PlacesList from '../../components/PlacesList/PlacesList';
import './Home.css';

function Home() {
    const citiesIds = useSelector(state => state.data.citiesIds);
    const placesIds = useSelector(state => state.data.placesIds);

    return (
        <div>
            <div className="homesection">
                <div className="homesection__header">
                    <h1>Města</h1>
                    <Link to="/cities">Zobrazit vše</Link>
                </div>
                <CitiesList/>
            </div>

            <div className="homesection">
                <div className="homesection__header">
                    <h1>Místa</h1>
                    <Link to="/places">Zobrazit vše</Link>
                </div>
                <PlacesList/>
            </div>
        </div>
    );
  }
  
  export default Home;