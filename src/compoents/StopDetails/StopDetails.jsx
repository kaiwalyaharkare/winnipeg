import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Chip } from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux'
import { setstopno } from '../../redux/Actions';
const styles = {
 
  card: {
  margin:"3%",
  background: '#6190E8', /* fallback for old browsers */
  background: '-webkit-linear-gradient(to right, #A7BFE8, #6190E8)',  /* Chrome 10-25, Safari 5.1-6 */
  background: 'linear-gradient(to right, #A7BFE8, #6190E8)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function StopDetails(props) {
  const coords = props.Lat+','+props.Lon
  const { classes } = props;
  const stopno = useSelector(state=>state.stopno)
  const dispatch = useDispatch()
  const handleclick=()=>{
   dispatch(setstopno(document.getElementById('stopno').value)) 
  }
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
        <Chip label={props.Direction} color = "primary" />
        <Chip label={props.Distance +"  metre"} color = "primary" />
        </Typography>
        <Typography  component="h2">
        {props.Name}
        </Typography>
        <Typography className={classes.pos} color="primary">
        <Chip id="stopno" label={props.Number} clickable onClick={handleclick}/> 
        </Typography>
      </CardContent>
      <CardActions>
        {console.log(props.Lat,props.Lon)}
        
        <Button size="small" onClick={()=>window.open(`http://maps.google.com/maps?z=12&t=m&q=loc:${coords}`)}>Navigate</Button>
      </CardActions>
    </Card>
  );
}

StopDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StopDetails);