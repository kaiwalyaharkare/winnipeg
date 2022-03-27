import React, { useEffect } from "react";
import { useState } from "react";
import { getstatus, getNearbystops } from "./api";
import Header from "./compoents/Header/Header";
import Map from "./compoents/Map/Map";
import StopList from "./compoents/Stops/StopList";
import { CssBaseline, Grid, List, Typography, Slider } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { getStopschedule } from "./api";
import { useSelector } from "react-redux";
const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#2f3d5e",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export const App = () => {
  const [coordinate, setCoordinate] = useState([]);
  const [NearbyStops, setNearbyStops] = useState([]);
  const [status, setstatus] = useState([""]);
  const [radius, Setradius] = useState(["250"]);
  const [stopSchedule, setstopSchedule] = useState([]);
  const [stop,setstop]= useState([])
  const isloggedin = useSelector(state=>state.isloggedin)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log(latitude, longitude);
        setCoordinate({ lat: latitude, lon: longitude });
      }
    );
  }, [radius]);

  useEffect(() => {
    getstatus().then((data) => {
      setstatus(data.data.status.message);
      //console.log({data})
    });
  }, []);
  useEffect(() => {
    getNearbystops(coordinate.lon, coordinate.lat, radius).then((data) => {
      setNearbyStops(data);
    });
  }, [radius,coordinate]);
  useEffect(() => {
    getStopschedule(stop).then((data) => {
      console.log(data);
      setstopSchedule(data);
    });
  }, []);

  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Header>{console.log(isloggedin)}</Header>
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            <StopList
              NearbyStops={NearbyStops}
              Setradius={Setradius}
              status={status}
              setstopSchedule={setstopSchedule}
              stopShedules={stopSchedule}
              setstop={setstop}
              stop={stop}
            ></StopList>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Map NearbyStops={NearbyStops} coordintes={coordinate}></Map>
          </Grid>
        </Grid>
      </ThemeProvider>
    </CssBaseline>
  );
};

export default App;
