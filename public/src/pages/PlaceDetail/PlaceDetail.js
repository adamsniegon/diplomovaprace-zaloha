import React from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import './PlaceDetail.css';

function PlaceDetail() {
    const {placeId} = useParams();
    const place = useSelector(state => state.data.places[placeId]);

    return (
        <div>
            <h1>{place && place.name}</h1>
            <p>{place && place.description}</p>
        </div>
    );
  }
  
  export default PlaceDetail;