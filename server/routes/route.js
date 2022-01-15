//* This is the Route file where all the routes such as create, delete  will be called
//* On calling the routes as soon as the routes matches a specific controller will be fired
//* All the works such as creating, updating etc will be done in the Post-controller file

import express from 'express';

import { createPost, getAllPosts, getPost, updatePost, deletePost } from '../controller/post-controller.js';

const router = express.Router();

//^ Router to create a post
router.post('/create', createPost);

router.get('/posts', getAllPosts);
router.get('/post/:id', getPost);

router.put('/update/:id', updatePost);
router.delete('/delete/:id', deletePost);

//! EXPORTING ROUTES
export default router;
