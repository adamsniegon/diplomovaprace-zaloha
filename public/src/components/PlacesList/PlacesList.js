import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import PlaceCard from '../PlaceCard/PlaceCard'
import './PlacesList.css';

function PlacesList() {
    const placesIds = useSelector(state => state.data.placesIds);

    return (
        <div className="placeslist">
            {placesIds && placesIds.map(id => (
                <Link className="placeslist__link" to={`/places/${id}`} key={id}>
                    <PlaceCard id={id}/>
                </Link>
            ))}
        </div>
    );
  }
  
  export default PlacesList;