import React from 'react';
import {useSelector} from 'react-redux';
import pinIcon from '../../assets/icons/pin-icon.svg';
import './PlaceCard.css';

function PlaceCard({id}) {
    const place = useSelector(state => state.places.places[id]);
    const cities = useSelector(state => state.cities.cities);
    const cityReference = cities[place.cityReference.toString()];

    return (
        <div className="placecard" style={{backgroundImage: `linear-gradient(to top, rgba(41, 41, 41, 1) 0%, rgba(255, 255, 255, 0) 70%), url(${place && place.image})`}}>
            <h1 className="placecard__headline">{place && place.name}</h1>
            <p className="placecard__city"><img className="placecard__pin-icon" src={pinIcon}></img>{cityReference.name}</p>
        </div>
    );
  }
  
  export default PlaceCard;