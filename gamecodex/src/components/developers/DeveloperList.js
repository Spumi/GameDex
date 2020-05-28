import React, { useState, useEffect } from "react";
import DeveloperCard from "./DeveloperCard";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

function DeveloperList(props) {
  const [state, setState] = useState({ devs: [] });

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://rawg-video-games-database.p.rapidapi.com/developers",
      headers: {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "8c1c4d646amsh9f0dfeca786087ep1e32c8jsnf00e67f10d71",
        useQueryString: true,
      },
    })
      .then((response) => {
        setState({ devs: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const StyledLink = styled(Link)`
    color: blue;
  `;

  return (
    <div className="card-container">
      {state.devs.map((d) => (
        <div className="card">
          <div className="card-header">
            <StyledLink to={`/developer/${d.id}`}>
              <h5>{d.name}</h5>
            </StyledLink>
          </div>
          <div className="card-body">
            <div className="numOfGames">
              <h5>Games count:</h5>
              <h5>{d.games_count}</h5>
            </div>
            <div className="gameExamples">
              <h5>Game Examples:</h5>
              {d.games.map((dg) => (
                <StyledLink to={`/game/${dg.id}`}>{dg.name}</StyledLink>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DeveloperList;
