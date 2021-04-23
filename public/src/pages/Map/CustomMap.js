import React from 'react';
import {useMap} from 'react-leaflet';
import L from 'leaflet';

function Map({activePin, id}) {
    const map = useMap();
    new L.Icon({className: activePin === id && "map__pin--active", popupAnchor: [0, 0], iconAnchor: [8, 30], iconSize: [16, 30], iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"});
    return null;
}
  
  export default Map;