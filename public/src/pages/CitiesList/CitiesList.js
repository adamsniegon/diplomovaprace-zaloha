import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import CityCard from '../../components/CityCard/CityCard';
import './CitiesList.css';

function CitiesList() {
    const citiesIds = useSelector(state => state.data.citiesIds);

    return (
        <div>
            <h1>Města</h1>
            {citiesIds && citiesIds.map(id => (
                <CityCard key={id} id={id}/>
            ))}
        </div>
    );
  }
  
  export default CitiesList;