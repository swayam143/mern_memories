import "./App.scss";
import {} from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Form from "./components/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "./Redux/actions/post";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;

// 9.0 - 9.30;
