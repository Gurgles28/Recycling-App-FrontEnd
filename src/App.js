import React from "react";

import Header from "./components/Header.js";
import Register from "./components/Register/Register.js";
import Login from "./components/Login/Login.js";
import Home from "./components/Home/Home.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecyclingCenters from "./components/Home/RecyclingCenters/RecyclingCenters.js";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/RecyclingCenters" element={<RecyclingCenters />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
