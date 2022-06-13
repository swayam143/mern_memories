import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// const url = "http://localhost:5000/posts";

export const fetchPosts = () => API.get("/posts");

export const createPost = (newPost) => API.post("/posts", newPost);

export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signin = (formdata) => API.post("/user/signin", formdata);

export const signup = (formdata) => API.post("/user/signup", formdata);
