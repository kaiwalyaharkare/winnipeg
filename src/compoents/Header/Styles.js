import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  toolbar: {
    
    background: '-webkit-linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b);',
    display: 'flex', justifyContent: 'space-between',
  },
}));

