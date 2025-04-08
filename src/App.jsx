import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/Home";
function App() {
  return (
    <div id="container">
      <h1>Colors of the Rainbow</h1>
      <div id="navbar">
        <Link to="/blue">Blue</Link> | <Link to="/red">Red</Link> |{" "}
        <Link to="/">Home</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/Blue" element={<Blue />} />
          <Route path="/Red" element={<Red />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
