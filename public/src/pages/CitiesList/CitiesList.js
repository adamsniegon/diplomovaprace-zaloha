import React from 'react';
import {useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import './CitiesList.css';

function CitiesList() {
    const {cityId} = useParams();
    const places = useSelector(state => Object.keys(state.places.places).filter(key => (
        state.places.places[key].cityReference === cityId
    )));

    return (
        <div>
            {places && places.map(id => (
                <Link to={`/places/${id}`}>{id}</Link>
            ))}
        </div>
    );
  }
  
  export default CitiesList;