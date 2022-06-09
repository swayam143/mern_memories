import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "./Redux/actions/post";
import Home from "./pages/home/Home";

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
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

// 20.45-21.15
