import React, {useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup, ZoomControl} from 'react-leaflet';
import {useSelector} from 'react-redux';
import pinIcon from '../../assets/icons/pin-icon.svg';
import MapView from './MapView';
import CustomMap from './CustomMap';
import L from 'leaflet';
import pinIconActive from '../../assets/icons/pin-icon-active.svg';
import PlaceCard from '../../components/PlaceCard/PlaceCard';
import {Link} from 'react-router-dom';
import './Map.css';

function Map() {
    const [activePin, setActivePin] = useState(0);
    const [view, setView] = useState([49.848610,18.512469]);
    const [zoom, setZoom] = useState(12);
    const placesIds = useSelector(state => state.data.placesIds);
    const places = useSelector(state => state.data.places);

    const inner = (e) => {
        e.stopPropagation();
    }

    const myClick = (e) => {
        //if (!e.currentTarget.dataset.id || !e.currentTarget.dataset.latitude || !e.currentTarget.dataset.longitude  ) return;
        setActivePin(e.currentTarget.dataset.id);
        setView([e.currentTarget.dataset.latitude, e.currentTarget.dataset.longitude]);
        setZoom(15);
    }

    const listItemLeave = (e) => {
        setActivePin(0);
        setView([parseFloat(e.currentTarget.dataset.latitude), parseFloat(e.currentTarget.dataset.longitude)]);
    }

    return (
        <div className="map">
            <ul className="map__list">
                {placesIds.map(id => (
                    <Link className="placeslist__link" to={`/places/${id}`} key={id} data-id={id} data-latitude={places[id] && places[id].location.geometry.coordinates[0]} data-longitude={places[id] && places[id].location.geometry.coordinates[1]} className="map__item" onMouseEnter={myClick} onMouseLeave={listItemLeave}>
                        <PlaceCard id={id}/>
                    </Link>
                ))}
            </ul>
            <MapContainer className="map__container" center={view} zoom={zoom} zoomControl={false}>
                <MapView center={view} zoom={zoom}/>
                <ZoomControl position="topright"/>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {placesIds && placesIds.map(id => (
                    <Marker icon={new L.Icon({className: "map__pin" + (activePin == id && " map__pin--active"), popupAnchor: [0, 0], iconAnchor: [8, 30], iconSize: [16, 30], iconUrl: activePin == id ? pinIconActive : pinIcon})} key={id} id={id} position={[places[id].location.geometry.coordinates[0], places[id].location.geometry.coordinates[1]]}>
                        <Popup>This is popup</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
  }
  
  export default Map;