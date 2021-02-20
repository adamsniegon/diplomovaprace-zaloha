import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

function Map() {
    return (
        <MapContainer style={{width: "100%", height: "100vh"}} center={[49.844891, 18.429800]} zoom={12}>
            <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        </MapContainer>
    );
  }
  
  export default Map;