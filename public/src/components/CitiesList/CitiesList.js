import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import CityCard from '../CityCard/CityCard';
import './CitiesList.css';

function CitiesList() {
    const citiesIds = useSelector(state => state.data.citiesIds);

    return (
        <div className="citieslist">
            {citiesIds && citiesIds.map(id => (
                <Link className="citieslist__link" to={`/cities/${id}`} key={id}>
                    <CityCard id={id}/>
                </Link>
            ))}
        </div>
    );
  }
  
  export default CitiesList;