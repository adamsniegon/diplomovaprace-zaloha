import React from 'react';
import {useSelector} from 'react-redux';
import pinIcon from '../../assets/icons/pin-icon.svg';
import './Card.css';

function Card({id}) {
    const city = useSelector(state => state.cities.cities[id]);
    console.log(city);

    return (
        <div className="card" style={{backgroundImage: `linear-gradient(to top, rgba(41, 41, 41, 1) 0%, rgba(255, 255, 255, 0) 50%), url(${city.image})`}}>
            <h1 className="card__headline"><img className="card__pin-icon" src={pinIcon}></img>{city.name}</h1>
        </div>
    );
  }
  
  export default Card;