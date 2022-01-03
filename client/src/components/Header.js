//components
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles({
    component: {
        background: '#FFFFFF',
        color: 'black'
    },
    container: {
        justifyContent: 'center',
        '&  >*': {
            padding: 20,
            color: 'black',
            textDecoration: 'none'
        }
    }
})

const Header = () => {
    const classes = useStyle();
    return (
      <AppBar className={classes.component}>
        <Toolbar className={classes.container}>
          <Typography>HOME</Typography>
          <Typography>ABOUT</Typography>
          <Typography>CONTACT</Typography>
          <Typography>LOGIN</Typography>
        </Toolbar>
      </AppBar>
  );
}

export default Header;
