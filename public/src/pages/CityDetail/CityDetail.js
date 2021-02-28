import React from 'react';
import {useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import PlaceCard from '../../components/PlaceCard/PlaceCard';
import BackLink from '../../components/BackLink/BackLink';
import BadgeBar from '../../components/BadgeBar/BadgeBar';
import Badge from '../../components/Badge/Badge';
import './CityDetail.css';

function CityDetail() {
    const {cityId} = useParams();
    const city = useSelector(state => state.data.cities[cityId]);
    const placesIds = useSelector(state => city ? state.data.cities[cityId].places : []);

    const badgeText = (numberOfPlaces) => {
        if (numberOfPlaces === 1) {
            return numberOfPlaces + " místo";
        } else if (numberOfPlaces > 1 && numberOfPlaces < 5) {
            return numberOfPlaces + " místa";
        } else {
            return numberOfPlaces + " míst";
        }
    }

    return (
        <div className="citydetail wrapper">
            <div className="citydetail__hero" style={{backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 50%),
            linear-gradient(to left, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 50%),
            linear-gradient(to top, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 50%),
            linear-gradient(to bottom, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 50%),
            url(${city && city.image})`}}></div>
            <BackLink/>
            <div className="citydetail__wrapper">
                <h1>{city && city.name}</h1>
                <BadgeBar>
                    <Badge text={city && (badgeText(city.places.length))} color="#ff4663"/>
                    <Badge text={city && (city.location.geometry.coordinates[0] + ", " + city.location.geometry.coordinates[1])} color="#888888"/>
                </BadgeBar>
                <p>{city && city.description}</p>
            </div>
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