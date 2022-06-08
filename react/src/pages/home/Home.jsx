import { Grid } from "@mui/material";
import React from "react";
import Form from "../../components/form/Form";
import Posts from "../../components/posts/Posts";

const Home = () => {
  return (
    <>
      <Grid container>
        <Grid padding={2} item xs={12} sm={6} md={8} xl={9}>
          <Posts />
        </Grid>
        <Grid padding={2} item xs={12} sm={6} md={4} xl={3}>
          <Form />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
