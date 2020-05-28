import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GameCard from "./GameCard";

const StyledLink = styled(Link)`
  color: blue;
`;

const Sprite = styled.img`
  width: 120px;
  height: 120px;
`;

function GameInfo(props) {
  const [gameImage, setGameImage] = useState("");
  const [developerId, setDeveloperId] = useState("");
  const [publisherId, setPublisherId] = useState("");

  const [state, setState] = useState();

  return (
    <div className="GameInfo">
      <div className="gameTitle">
        <h2>Game Title</h2>
      </div>
      <div className="images">
        <Sprite className="GameImage" src={gameImage} />
        <h5>Image slider placeholder</h5>
      </div>
      <div className="developerInfo">
        <h5>Developer:</h5>
        <StyledLink to={`/developers/${developerId}`}>
          Developer Team placeholder
        </StyledLink>
      </div>
      <div className="publisherInfo">
        <h5>Publisher:</h5>
        <StyledLink to={`/publisher/${publisherId}`}>
          Publisher Company placeholder
        </StyledLink>
      </div>
      <div className="description">
        <h5>About:</h5>
        <p>Game Description placeholder</p>
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
