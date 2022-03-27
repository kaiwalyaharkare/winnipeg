import React from 'react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const containerStyle = {
  width: '100%',
  height: '100vh'
};


export default function Map({coordintes,Nearbystops}) {
  const center = {
    lat: coordintes.lat,
    lng: coordintes.lon,
  };
  
  return (
    <LoadScript
      googleMapsApiKey= {process.env.REACT_MAPSAPIKEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}
