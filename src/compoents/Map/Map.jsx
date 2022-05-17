import React from "react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

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
   <>
   </>
  );
}
