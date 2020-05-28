import React, { useState, useEffect } from "react";
import PublisherCard from "./PublisherCard";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PublisherList(props) {
  const [state, setState] = useState({ pubs: [] });

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://rawg-video-games-database.p.rapidapi.com/publishers",
      headers: {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "8c1c4d646amsh9f0dfeca786087ep1e32c8jsnf00e67f10d71",
        useQueryString: true,
      },
    })
      .then((response) => {
        setState({ pubs: response.data.results });
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
      {state.pubs.map((p) => (
        <div className="card">
          <div className="card-header">
            <StyledLink to={`/developer/${p.id}`}>
              <h5>{p.name}</h5>
            </StyledLink>
          </div>
          <div className="card-body">
            <div className="numOfGames">
              <h5>Games count:</h5>
              <h5>{p.games_count}</h5>
            </div>
            <div className="gameExamples">
              <h5>Game Examples:</h5>
              {p.games.map((pg) => (
                <StyledLink to={`/game/${pg.id}`}>{pg.name}</StyledLink>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PublisherList;
