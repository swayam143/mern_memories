import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";

function App() {
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
