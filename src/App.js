import React from "react";

import Header from "./components/Header.js";
import { AuthWrapper } from "./components/Routes&Navigation/AuthWrapper.js";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <AuthWrapper />
      </BrowserRouter>
    </div>
  );
}

export default App;
