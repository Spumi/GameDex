import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container"></div>
      </div>
    </BrowserRouter>
  );
};

export default App;
