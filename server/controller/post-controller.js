//* This is the controller file
//* All the actual backend work such as creating, deleting a note and so on will be done here

import Post from '../schema/post-schema.js';

//^ `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
//^ CREATE CONTROLLER
//^ Here we are getting the details from the body and then we are simply saving all these into the DB
//^ After that we are sending sucess which will be used in the frontend

export const createPost = async (request, response) => {
  console.log(request.body);
  try {
    const post = await new Post(request.body);
    post.save();

    response.status(200).json('Blog saved successfully');
  } catch (error) {
        response.status(500).json(error);
    }

}

export const getAllPosts = async (request, response) => {
  let username = request.query.username;
  let category = request.query.category;
  let posts;
  try {
        if(username)
            posts = await Post.find({ username: username });
        else if (category)
            posts = await Post.find({ categories: category });
        else
            posts = await Post.find({});
        response.status(200).json(posts);
  } catch (error) {
        response.status(500).json(error)
    }
}

export const getPost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const updatePost = async (request, response) => {
    try {
        await Post.findByIdAndUpdate( request.params.id, { $set: request.body })

        response.status(200).json('post updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const deletePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        await post.delete()

        response.status(200).json('post deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}
