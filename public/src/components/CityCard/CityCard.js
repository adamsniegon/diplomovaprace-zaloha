import React from 'react';
import {useSelector} from 'react-redux';
import pinIcon from '../../assets/icons/pin-icon.svg';
import './CityCard.css';

function CityCard({id}) {
    const city = useSelector(state => state.data.cities[id]);

    return (
        <div className="citycard" style={{backgroundImage: `linear-gradient(to top, rgba(41, 41, 41, 1) 0%, rgba(255, 255, 255, 0) 50%), url(${city && city.image})`}}>
            <h1 className="citycard__headline"><img className="citycard__pin-icon" src={pinIcon}></img>{city && city.name}</h1>
        </div>
    );
  }
  
  export default CityCard;