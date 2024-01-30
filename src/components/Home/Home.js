import React from "react";
import ButtonAppBar from "./AppBar/ButtonAppBar";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <ButtonAppBar />
      <h1>WELCOME TO MSG RECYCLING APP</h1>
      <p>
        Start recycling today and make a positive impact on the environment!
      </p>
    </div>
  );
}

export default Home;
