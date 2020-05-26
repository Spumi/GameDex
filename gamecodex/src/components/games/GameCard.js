import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getGames } from "../../api/Game";

const StyledLink = styled(Link)`
  color: blue;
`;

const Sprite = styled.img`
  width: 120px;
  height: 120px;
`;

function GameCard(props) {
  const [gameId, setGameId] = useState("");
  const [gameImage, setGameImage] = useState("");
  const [developerId, setDeveloperId] = useState("");
  const [publisherId, setPublisherId] = useState("");

  return (
    <div className="GameCard">
      <StyledLink to={`/game/${gameId}`}>
        <Sprite className="GameImage" src={gameImage} />
        <h5>{props.game.name}</h5>
      </StyledLink>
      <div className="developerRoute">
        <h6>Developer:</h6>
        <StyledLink to={`/developers/${developerId}`}>
          <h6>Developer Team</h6>
        </StyledLink>
      </div>
      <div className="publisherRoute">
        <h6>Publisher:</h6>
        <StyledLink to={`/publisher/${publisherId}`}>
          <h6>Publisher Company</h6>
        </StyledLink>
      </div>
      <div className="ratingInfo">
        <h6>Rating:</h6>
        <h6>Rating Number</h6>
      </div>
    </div>
  );
}

export default GameCard;
