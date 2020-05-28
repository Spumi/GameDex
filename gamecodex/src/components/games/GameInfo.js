import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import axios from "axios";
import GameContext from "../../GameContext";

const StyledLink = styled(Link)`
  color: lightgray;
`;

const Sprite = styled.img`
  width: 120px;
  height: 120px;
`;

function GameInfo(props) {
  const [state, setState] = useState({ games: [] });

  /*useEffect(() => {
    axios({
      method: "GET",
      url:
        "https://rawg-video-games-database.p.rapidapi.com/games/" +
        props.game.id,
      headers: {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "8c1c4d646amsh9f0dfeca786087ep1e32c8jsnf00e67f10d71",
        useQueryString: true,
      },
    })
      .then((response) => {
        setState({ game: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);*/

  return (
    <div className="GameInfo">
      <div className="gameTitle">
        <h2>Game Title</h2>
      </div>
      <div className="images">
        <Sprite className="GameImage" src={null} />
        <h5>Image slide placeholder</h5>
      </div>
      <div className="developerInfo">
        <h5>Developer(s):</h5>
        <StyledLink to={`/developers/`}>Developers placeholder</StyledLink>
      </div>
      <div className="publisherInfo">
        <h5>Publisher:</h5>
        <StyledLink to={`/publisher`}>Publisher Company placeholder</StyledLink>
      </div>
      <div className="description">
        <h5>About:</h5>
        <p>{state.games.description}</p>
      </div>
      <div className="releaseDate">
        <h5>Release Date:</h5>
        <p>Release Date placeholder</p>
      </div>
      <div className="genreList">
        <h5>Genres:</h5>
        <ol>
          <li>Genre List placeholder</li>
        </ol>
      </div>
      <div className="tagList">
        <h5>Tags:</h5>
        <ol>
          <li>Tag List placeholder</li>
        </ol>
      </div>
      <div className="website">
        <h5>Website:</h5>
        <p>Website Link placeholder</p>
      </div>
      <div className="platformList">
        <h5>Platforms:</h5>
        <ol>
          <li>Platform List placeholder</li>
        </ol>
      </div>
    </div>
  );
}

export default GameInfo;
