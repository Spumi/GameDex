import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import GameList from "./components/games/GameList";
import DeveloperList from "./components/developers/DeveloperList";
import PublisherList from "./components/publishers/PublisherList";
import PageContext from "./pageContext";


const CardContainer = styled.div`
  width: 80%;
  background-color: #202121;
  border-radius: 15px;
  margin: auto;
  margin-top: 10px;
  padding: 20px;
`;

const App = (props) => {
  const pc = useContext(PageContext);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <CardContainer>
        <PageContext.Provider value={pc}>
            <Route exact path="/:page" component={GameList} />
        </PageContext.Provider>
        <PageContext.Provider value={pc}>
          <Route exact path="/" component={GameList} />
        </PageContext.Provider>
          <Route path="/developers" component={DeveloperList} />
          <Route path="/publishers" component={PublisherList} />
          <button>Previous</button>
          <button>Next</button>
        </CardContainer>
      </div>
    </BrowserRouter>
  );
};

export default App;
