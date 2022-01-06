import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #92A9BD`,
    width: '100%',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
        '& :first-child': {
            fontSize: 100,
            color: '#FFFFFF',
            lineHeight: 1,
        },
        '& :last-child': {
            fontSize: 30,
            color: '#AEFEFF',
        }
  }
});


const Banner =() => {
  const classes = useStyles();
  return (
    <Box className={classes.image}>
        <Typography>BLOGS</Typography>
        <Typography>Type Anything 🤔</Typography>
    </Box>
  )
}

export default Banner
