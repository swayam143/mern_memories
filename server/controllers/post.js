//Aquiring Models

import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (e) {
    res.status(401);
    console.log(e);
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  console.log(post);

  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
    // console.log(newPost);
  } catch (e) {
    res.status(409);
    console.log(e);
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;

  // get data by new entry(updated it)
  const post = req.body;
  //

  if (!mongoose.Types.ObjectId.isValid(_id))
    res.status(404).send("No post with that id");

  const updatedPost = await postMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(updatedPost);
};
