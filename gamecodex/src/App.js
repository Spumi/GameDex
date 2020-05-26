import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 80%;
  background-color: #202121;
  border-radius: 15px;
  margin: auto;
  margin-top: 10px;
`;

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="Container">
          <Route path="/" component={GameList} />
        </div>
        <CardContainer>test</CardContainer>
      </div>
    </BrowserRouter>
  );
};

export default App;
