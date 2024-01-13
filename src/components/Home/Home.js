import React from "react";
import ButtonAppBar from "./AppBar/ButtonAppBar";
import "./Home.css";
import { AuthData } from "../AuthWrapper";

function Home() {
  const { loggedUserRole } = AuthData();

  return (
    <div>
      <ButtonAppBar />
      <h1>Welcome to MSG Recycling App</h1>
    </div>
  );
}
export default Home;
