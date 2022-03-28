import { makeStyles } from '@material-ui/core/styles';
import { color } from '@mui/system';

export default makeStyles((theme) => ({
  stopScheduledata:{
    backgroundColor:'background: -webkit-linear-gradient(to right, #f2709c, #ff9472)'
  },
  formControl: {
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
  },
  statuschip:{
    margin:'30px',
    backgroundColor:'#FFFFF'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    paddingTop:'10%',
    height: '100vh', overflow: 'auto',
  },
}));
