import { Grid, Card, CardActionArea, FormControl } from "@material-ui/core";
import React from "react";
import StopDetails from "../StopDetails/StopDetails";
import useStyles from "./Styles.js";
import { useDispatch, useSelector } from "react-redux";
import { setstopno } from "../../redux/Actions";
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
import StopScheduleDetails from "../StopScheduleDetails/StopScheduleDetails";
export default function StopList({
  NearbyStops,
  Setradius,
  status,
  stopSchedule,
}) {
  const classes = useStyles();
  const stopno = useSelector((state) => state.stopno);
  const dispatch = useDispatch();
  console.log();
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
              <h2 p={"20%"}>Enter Stop Number</h2>
              <TextField
                id="Stopnumber"
                label={"Stop Number"} //optional
              />
              <Button
                p={"10%"}
                m={"10%"}
                onClick={() =>
                  dispatch(
                    setstopno(document.getElementById("Stopnumber").value)
                  )
                }
              >
                Submit
              </Button>
            </FormControl>
          </Paper>
        </Box>
        <Grid item xs={12}>
          {stopSchedule ? (
            <StopScheduleDetails
              Name={stopSchedule?.["stop-schedule"]?.["stop"]?.["name"]}
              Schedule={stopSchedule?.["stop-schedule"]?.["route-schedules"]}
            ></StopScheduleDetails>
          ) : (
            <></>
          )}
        </Grid>
        {NearbyStops?.stops?.map((NearbyStop, i) => (
          <Grid item xs={12} key={i} className={classes.stopScheduledata}>
            <StopDetails
              key={i}
              Name={NearbyStop.name}
              Direction={NearbyStop.direction}
              Distance={NearbyStop.distances?.direct}
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
