import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import GameList from "./components/games/GameList";

const CardContainer = styled.div`
  width: 80%;
  background-color: #fff;
  border-radius: 15px;
  margin: auto;
  margin-top: 10px;
`;

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <CardContainer>
          <Route path="/" component={GameList} />
        </CardContainer>
      </div>
    </BrowserRouter>
  );
};

export default App;
