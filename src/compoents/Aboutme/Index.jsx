import * as React from "react";
import {Card,Grid} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header/Header'
import PropTypes from 'prop-types';

const styles = {
  card: {
    background: "#f2709c" /* fallback for old browsers */,
    background:
      "-webkit-linear-gradient(to right, #ff9472, #f2709c)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to right, #ff9472, #f2709c)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    minWidth: 275,
  },
};
 function MediaCard(props) {
  const {classes} =props;
  return (

    <Grid container justify = "center">
    <Card sx={{ maxWidth: 345 }} className={classes.card}>
      <CardMedia
        component="img"
        height="140"
        // image="winnipegtravel\winnipegtravel\static\images\kaiwalyaphoto.jpg"
        // alt="kaiwalyaphot"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Kaiwalya Harkare
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hi its me Kaiwalya Harkare I am joining in the may term at UofM I know
          parking is expensive so i made this tool for you with 💖 I hope we can
          be good friends [PS ik the map is not working because i dont want to
          expose my google key (fear of getting a huge bill!!)for now i will add
          it later]
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Instagram</Button>
        <Button size="small">Github</Button>
      </CardActions>
    </Card>
    </Grid>
  );
}
MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);