import * as api from "../../api";
import { CREATE, FETCH_ALL, UPDATE } from "./actionTypes";

//Action creators

//Get api
export const getPosts = () => async (dispatch) => {
  try {
    //We store data from api in variable name as data and pass it as payload to reducers
    const { data } = await api.fetchPosts();
    //Dispatch to reducer
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

//create api
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

//Update api
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
