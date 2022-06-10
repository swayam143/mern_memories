import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import moment from "moment";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";

const Post = ({ post, setCurrentId }) => {
  return (
    <>
      <Card className="relative">
        <CardMedia
          component="img"
          image={post.selectedFile}
          title={post.title}
          className="card_img"
        />
        <Grid>
          <Grid className="overlay">
            <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body2">
              {moment(post.createdAt).fromNow()}
            </Typography>
          </Grid>
          <Grid className="overlay_2">
            <Button
              sx={{ color: "#fff", fontWeight: 900 }}
              onClick={() => {
                setCurrentId(post._id);
              }}
            >
              <MoreHorizIcon />
            </Button>
          </Grid>
          <Grid className="details">
            <Typography color="textSecondary" variant="body2">
              {post.tags.map((tag) => `#${tag} `)}
            </Typography>
            <Typography gutterBottom variant="h5">
              {post.title}
            </Typography>
            <CardContent className="CardContent">
              {" "}
              <Typography gutterBottom variant="h5">
                {post.message}
              </Typography>
            </CardContent>
            <CardActions className="cardActions">
              <Button
                className="btns"
                size="small"
                variant="contained"
                startIcon={<ThumbUpIcon />}
              >
                Liked
              </Button>
              <Button
                className="btns"
                size="small"
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Post;
