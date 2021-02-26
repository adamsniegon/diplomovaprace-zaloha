import React from 'react';
import {useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import './CityDetail.css';

function CityDetail() {
    const {cityId} = useParams();
    const city = useSelector(state => state.data.cities[cityId]);
    const placesIds = useSelector(state => city ? state.data.cities[cityId].places : []);

    return (
        <div>
            <h1>{city && city.name}</h1>
            <p>{city && city.description}</p>
            {placesIds && placesIds.map(id => (
                <Link to={`/places/${id}`} key={id}>{id}</Link>
            ))}
        </div>
    );
  }
  
  export default CityDetail;