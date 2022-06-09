import React from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid } from "@mui/material";
import Post from "./Post/Post";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    <>
      {!posts.length ? (
        <>
          <CircularProgress color="secondary" />
        </>
      ) : (
        <>
          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid item xs={12} md={6} lg={4} xl={3} key={post._id}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
};

export default Posts;
