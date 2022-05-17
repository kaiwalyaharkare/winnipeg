import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Chip } from "@material-ui/core";
const styles = {
  card: {
    margin: "3%",
    background: "#f2709c" /* fallback for old browsers */,
    background:
      "-webkit-linear-gradient(to right, #ff9472, #f2709c)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to right, #ff9472, #f2709c)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

    minWidth: 275,
  },
  li: { "list-style-type": "none" },
  ul: {
    "list-style-type": "none",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};
const totime = (date) => {
  const time = new Date(date).toLocaleTimeString("en", {
    timeStyle: "short",
    hour12: false,
    timeZone: "UTC",
  });
  return time;
};
function StopDetails(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;
  const schedule = props.Schedule;
  console.log(schedule);

  const myDate = "2012-10-16T11:00:28.556094Z";
  const time = new Date(myDate).toLocaleTimeString("en", {
    timeStyle: "short",
    hour12: false,
    timeZone: "UTC",
  });
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          <Chip label={props.Name + "  Stop Schedule"} color="primary" />
        </Typography>
        <Typography component="h2"></Typography>
        <Typography className={classes.pos} color="primary">
          {schedule?.map((schedul, i) => (
            <ui className={classes.ui}>
              <ui className={classes.ui}>
                {schedul?.["scheduled-stops"].map((stops, i) => (
                  <ui className={classes.ui}>
                    <li m={"10%"} className={classes.li}>
                      <Chip
                        label={stops.variant?.name}
                        color="primary"
                        m={"5%"}
                      ></Chip>
                    </li>
                    <li className={classes.li}>
                      <Chip
                        label={ totime( stops.times.arrival?.estimated)}
                        variant="outlined"
                        color="primary"
                      ></Chip>
                    </li>
                  </ui>
                ))}
              </ui>
            </ui>
          ))}
        </Typography>
      </CardContent>

      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

StopDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StopDetails);
