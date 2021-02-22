import React, {useState, useEffect} from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {useSelector, useDispatch} from 'react-redux';
import {dataFetch} from '../../store/actions/dataActions';
import pinIcon from '../../assets/icons/pin-icon.svg';
import './Map.css';

function Map() {
    /*const dispatch = useDispatch();
    const places = useSelector(state => state.places.places);
    const placesIds = useSelector(state => state.places.placesIds);
    const cities = useSelector(state => state.cities.cities);

    useEffect(() => {
        dispatch(citiesFetch());
    }, []);

    return (
        <div className="map">
            <ul className="map__list">
                {placesIds.map(id => (
                    <li className="map__item">
                        <a className="map__link" href="">
                            <div className="map__image" style={{backgroundImage: `url(${places[id] && places[id].image})`}}></div>
                            <div className="map__info">
                                <p className="map__name">{places[id].name}</p>
                                <p className="map__city"><img className="map__pin-icon" src={pinIcon}></img>{(cities && places) && cities[places[id].cityReference.toString()].name}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
            <MapContainer className="map__container" center={[49.844891, 18.429800]} zoom={12}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {placesIds.map(id => (
                    <Marker position={[places[id].location.geometry.coordinates[0], places[id].location.geometry.coordinates[1]]}>
                        <Popup>This is popup</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );*/

    return (
        <div></div>
    );
  }
  
  export default Map;