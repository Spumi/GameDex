import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import React, { useContext } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import styled from "styled-components";
import GameList from "./components/games/GameList";
import DeveloperList from "./components/developers/DeveloperList";
import PublisherList from "./components/publishers/PublisherList";
import PageContext from "./pageContext";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

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
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <CardContainer>
          <PageContext.Provider value={pc}>
            <Route exact path="/games/:page" component={GameList} />
          </PageContext.Provider>
          <Route exact path="/">
            <Redirect from="/" to="/games/1" />
          </Route>

          <Route exact path="/developers" component={DeveloperList} />
          <Route exact path="/publishers" component={PublisherList} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
        </CardContainer>
      </BrowserRouter>
    </div>
  );
};

export default App;
