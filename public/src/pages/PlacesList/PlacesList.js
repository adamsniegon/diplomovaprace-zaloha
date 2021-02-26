import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import './PlacesList.css';

function PlacesList() {
    const placesIds = useSelector(state => state.data.placesIds);

    return (
        <div>
            <h1>Místa</h1>
            {placesIds && placesIds.map(id => (
                <Link to={`/places/${id}`} key={id}>{id}</Link>
            ))}
        </div>
    );
  }
  
  export default PlacesList;