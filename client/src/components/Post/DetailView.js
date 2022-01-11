import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

const useStyle = makeStyles({
    container: {
        padding: '0 100px',
        },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
      },
      icons: {
       float: 'right'
     },
     icon: {
        margin: 5,
        padding: 5,
        border: '1px solid #878787',
        borderRadius: 10
    },
    heading: {
        fontSize: 38,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0',
    },
    author: {
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
    },
});


const DetailView =() =>  {
  const classes = useStyle();
  const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
  return (
    <Box className={classes.container}>
      <img src={url} alt="banner" className={classes.image} />
      <Box className={classes.icons}>
        <Edit className={classes.icon} />
        <Delete className={classes.icon} color="error"/>
      </Box>
      <Typography className={classes.heading}> Title of Blog </Typography>

      <Box className={classes.author}>
          <Typography>Author: <span style={{fontWeight: 600}}>That's Roy</span></Typography>
          <Typography style={{marginLeft: 'auto'}}>11 June 2022 </Typography>
      </Box>
    </Box>
  )
}

export default DetailView;
