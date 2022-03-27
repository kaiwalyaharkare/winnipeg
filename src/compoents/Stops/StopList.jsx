import { Grid, Card, CardActionArea, FormControl } from "@material-ui/core";
import React from "react";
import StopDetails from "../StopDetails/StopDetails";
import useStyles from "./Styles.js";
import {
  CssBaseline,
  List,
  Typography,
  Slider,
  Chip,
  Box,
  Paper,
  TextField,
  Button,
} from "@material-ui/core";
import Stack from "@mui/material/Stack";
import BusStopShedules from "../BusStopShedules/BusStopShedules";
export default function StopList({
  NearbyStops,
  Setradius,
  status,
  stopSchedule,
  setstopSchedule,
}) {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3} className={classes.list} padding={2}>
        <Box
          spacing={9}
          direction="row"
          p={"10%"}
          sx={{
            width: "90%",
          }}
        >
          <Chip m={"10%"} x={"10%"} label={status}></Chip>
          <Chip spacing={4} label="Set Nearby Stop Set Distance(m)"></Chip>
          <Slider
            p={"10%"}
            card
            aria-label="Radius Value"
            defaultValue={250}
            size="Large"
            valueLabelDisplay="auto"
            step={Number(100)}
            min={Number(250)}
            max={Number(1000)}
            onChange={(e, value) => {
              Setradius(value);
            }}
          />
          <Paper>
            <FormControl>
            <h2>Enter Stop Number </h2>
            <TextField id="Stopnumber"
              label={"Stop Number"} //optional
            />
            <Button onClick={(e) => {
              setstopSchedule((document.getElementById('Stopnumber').value))} }>Submit</Button>
            </FormControl>
          </Paper>
        </Box>
        {JSON.stringify(stopSchedule)}
        {NearbyStops?.stops?.map((NearbyStop, i) => (
          <Grid item xs={12} key={i}>
            <StopDetails
              key={i}
              Name={NearbyStop.name}
              Direction={NearbyStop.direction}
              Number={NearbyStop.number}
              StreetName={NearbyStop.street?.name}
              Type={NearbyStop.street?.type}
            ></StopDetails>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
