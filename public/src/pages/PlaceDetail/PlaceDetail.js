import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {placeFetch} from '../../store/actions/placesActions';
import './PlaceDetail.css';

function PlaceDetail() {
    const {placeId} = useParams();
    const dispatch = useDispatch();
    const {name, description, image, location} = useSelector(state => state.places.places[placeId]);

    useEffect(() => {
        dispatch(placeFetch(placeId));
    }, []);

    return (
        <div>
            {name &&
            <React.Fragment>
                <img style={{width: "100px"}} src={image}></img>
                <h1>{name}</h1>
                <p>{description}</p>
            </React.Fragment>
            }
        </div>
    );
  }
  
  export default PlaceDetail;