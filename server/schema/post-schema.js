//^ `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
//^ NEW POSTING OF BLOG
//^ Here this is used to fetch a single post from the DB with the help of it's ID
//^ Then edit that note with the help of the newly added/edited Data
//^ If created then success = true

import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: true
  },
  categories: {
    type: String,
    required: false
  },
  createdDate: {
    type: Date
  }
})

const post = mongoose.model('post', PostSchema);

export default post;
