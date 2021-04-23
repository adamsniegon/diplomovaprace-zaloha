import React from 'react';
import {useMap} from 'react-leaflet';

function MapView({center, zoom}) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }
  
  export default MapView;