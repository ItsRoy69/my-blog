import React, { useState, useEffect } from 'react';
import { Box, makeStyles, Button, FormControl, InputBase, TextareaAutosize } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { useParams, useNavigate } from 'react-router-dom';

import { getPost, updatePost } from '../../service/api';


const useStyle = makeStyles(theme => ({
    container: {
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    title: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    textfield: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    textarea: {
        width: '100%',
        border: 'none',
        marginTop: 50,
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    }
}));

const initialValues = {
    title: '',
    description: '',
    picture: '',
    username: 'codeforinterview',
    categories: 'Tech',
    createdDate: new Date()
}


const UpdateView = () => {
  const classes = useStyle();
  const navigate = useNavigate();

  const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
  const [post, setPost] = useState(initialValues);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
        let data = await getPost(id);
        console.log(data);
        setPost(data);
      }
      fetchData();
    }, []);


    const handleChange = (e) => {
          setPost({ ...post, [e.target.name]: e.target.value });
      }

    const updateBlogPost = async () => {
          await updatePost(id, post);
          navigate(`/details/${id}`);
      }


    return (
      <Box className={classes.container}>
          <img src={url} alt="banner" className={classes.image} />
          <FormControl className={classes.title}>
            <AddCircle  fontSize="large" color="action"/>

            <InputBase placeholder="Title" onChange={(e) => handleChange(e)} name='title' value={post.title} className={classes.textfield}/>

            <Button onClick={() => updateBlogPost()} variant="contained" color="primary">Update</Button>
          </FormControl>

          <TextareaAutosize
                rowsMin={5}
                placeholder="Tell your story..."
                className={classes.textarea}
                name='description'
                value={post.description}
                onChange={(e) => handleChange(e)}
            />

      </Box>
    )
}

export default UpdateView;
