import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import GameList from "./components/games/GameList";
import DeveloperList from "./components/developers/DeveloperList";
import PublisherList from "./components/publishers/PublisherList";

const CardContainer = styled.div`
  width: 80%;
  background-color: #202121;
  border-radius: 15px;
  margin: auto;
  margin-top: 10px;
  padding: 20px;
`;

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <CardContainer>
          <Route exact path="/" component={GameList} />
          <Route path="/developers" component={DeveloperList} />
          <Route path="/publishers" component={PublisherList} />
        </CardContainer>
      </div>
    </BrowserRouter>
  );
};

export default App;
