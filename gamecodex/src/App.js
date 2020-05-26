import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import GameList from "./components/games/GameList";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="Container">
          <Route path="/" component={GameList} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
