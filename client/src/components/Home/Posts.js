import Post from './Post';
import { Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Posts = () =>   {
  let posts = [1,2,3,4,5,6,7,8]
  return (
    posts.map(post => (
      <Grid item lg={3} sm={4} xs={12}>
        <Link  style={{textDecoration: 'none', color: 'inherit'}} to={'/details'}>
            <Post />
        </Link>
      </Grid>
    ))
  )
}

export default Posts;
