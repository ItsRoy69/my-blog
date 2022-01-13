//components
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    component: {
        background: 'black',
        color: 'black'
    },
    container: {
        justifyContent: 'center',
        '&  >*': {
            padding: 20,
            color: '#FFFFFF',
            textDecoration: 'none'
        }
    }
})

const Header = () => {
    const classes = useStyle();
    return (
      <AppBar className={classes.component}>
        <Toolbar className={classes.container}>
          <Link to='/'>HOME</Link>
          <Link to='/about'>ABOUT</Link>
          <Link to='/contact'>CONTACT</Link>
          <Link to='/login'>LOGIN</Link>
        </Toolbar>
      </AppBar>
  );
}

export default Header;
