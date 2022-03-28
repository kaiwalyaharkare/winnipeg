import React from "react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Marker from "react-google-maps/lib/components/Marker";
import useStyle from "./Styles";
const containerStyle = {
  width: "100%",
  height: "100vh",
};

export default function Map({ coordintes, NearbyStops }) {
  const classes = useStyle();
  const center = {
    lat: coordintes.lat,
    lng: coordintes.lon,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCntgdgZkW_KJIfSxqE6q6wcJC3gsxTHm8">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        
        {console.log(NearbyStops)}
        {NearbyStops?.stops?.map((NearbyStop, i) => (
          <Marker
            key={i}
            icon={
              "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            }
            position={{
              lat: Number(NearbyStop.centre.geographic.latitude),
              lng: Number(NearbyStop.centre.geographic.longitude),
            }}
          ></Marker>
        ))}
        <Marker
          icon={
            "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
          }
          position={{
            lat: 49.89512, //Number(NearbyStop.centre.geographic.latitude),
            lng: -97.1371, //</GoogleMap>Number(NearbyStop.centre.geographic.longitude),
          }}
        ></Marker>
        {/* Child components, such as markers, info windows, etc. */}
        
      </GoogleMap>
    </LoadScript>
  );
}
