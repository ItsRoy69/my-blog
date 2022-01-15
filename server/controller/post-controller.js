import Post from '../schema/post-schema.js';

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
