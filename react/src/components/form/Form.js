import React, { useEffect, useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../Redux/actions/post";

const Form = ({ currentId, setCurrentId }) => {
  //Access state from Reducer but of particular id
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );

  //Whenever post changes setPost data becomes post like in editin we get previous data in form
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  //Our state
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  //Redux function to dispatch

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //Editing mode
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    }
    //Create Mode
    else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <>
      <Paper sx={{ padding: "10px" }}>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography variant="h6">
            {currentId ? "Editing" : "Creating a memory"}
          </Typography>
          <TextField
            sx={{ marginTop: "15px" }}
            name="creator"
            variant="outlined"
            label="Creator"
            fullWidth
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
          <TextField
            sx={{ marginTop: "15px" }}
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <TextField
            sx={{ marginTop: "15px" }}
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <TextField
            sx={{ marginTop: "15px" }}
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
          />

          <Grid marginTop={2} className="fileInput">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </Grid>
          <Button
            sx={{ margin: "20px 10px 10px 0px" }}
            size="large"
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Button
            sx={{ margin: "20px 10px 10px 10px" }}
            size="large"
            variant="contained"
            color="secondary"
            onClick={clear}
          >
            Clear
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default Form;
