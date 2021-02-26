import React from 'react';
import {useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import PlaceCard from '../../components/PlaceCard/PlaceCard';
import BackLink from '../../components/BackLink/BackLink';
import './CityDetail.css';

function CityDetail() {
    const {cityId} = useParams();
    const city = useSelector(state => state.data.cities[cityId]);
    const placesIds = useSelector(state => city ? state.data.cities[cityId].places : []);

    return (
        <div className="wrapper">
            <BackLink/>
            <h1>{city && city.name}</h1>
            <p>{city && city.description}</p>
            <div className="cityplaceslist">
                {placesIds && placesIds.map(id => (
                    <Link className="cityplaceslist__link" to={`/places/${id}`} key={id}>
                        <PlaceCard id={id}/>
                    </Link>
                ))}
            </div>
        </div>
    );
  }
  
  export default CityDetail;