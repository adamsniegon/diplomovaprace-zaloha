import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {citiesFetch} from '../../store/actions/citiesActions';
import {allPlacesFetch} from '../../store/actions/placesActions';
import './Home.css';

function Home() {
    const citiesIds = useSelector(state => state.cities.citiesIds);
    const placesIds = useSelector(state => state.places.placesIds);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(citiesFetch());
        dispatch(allPlacesFetch());
    }, []);

    return (
        <div>
            <h1>Města</h1>
            {citiesIds && citiesIds.map(id => (
                <Link key={id} to={`/cities/${id}`}>{id}</Link>
            ))}

            <h1>Místa</h1>
            {placesIds && placesIds.map(id => (
                <Link key={id} to={`/places/${id}`}>{id}</Link>
            ))}
        </div>
    );
  }
  
  export default Home;