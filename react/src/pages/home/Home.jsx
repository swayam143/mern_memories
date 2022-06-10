import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Form from "../../components/form/Form";
import Posts from "../../components/posts/Posts";
import { getPosts } from "../../Redux/actions/post";

const Home = () => {
  //Id of particcular card we access from database
  const [currentId, setCurrentId] = useState(null);
  console.log(currentId);

  const dispatch = useDispatch();

  //Whenever value changes api recall
  //currentId is when update api call
  //And dispatch when any function call
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  //   //Accessing state from reducer
  // const posts = useSelector((state) => state.posts);
  // console.log(posts);

  return (
    <>
      <Grid container>
        <Grid
          padding={2}
          item
          xs={12}
          sm={6}
          md={8}
          xl={9}
          order={{ xs: 3, sm: 2 }}
        >
          <Posts setCurrentId={setCurrentId} currentId={currentId} />
        </Grid>
        <Grid
          padding={2}
          item
          xs={12}
          sm={6}
          md={4}
          xl={3}
          order={{ xs: 2, sm: 3 }}
        >
          <Form setCurrentId={setCurrentId} currentId={currentId} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
