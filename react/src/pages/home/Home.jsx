import { Grid } from "@mui/material";
import React, { useState } from "react";
import Form from "../../components/form/Form";
import Posts from "../../components/posts/Posts";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  console.log(currentId);
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
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
