import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: blue;
`;

function GameCard(props) {
  const [gameId, setGameId] = useState("");
  const [publisherId, setPublisherId] = useState("");

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <StyledLink to={`/puiblisher/${publisherId}`}>
            <h5>Publisher Company placeholder</h5>
          </StyledLink>
        </div>
        <div className="card-body">
          <div className="numOfGames">
            <h5>Games count:</h5>
            <p>Number of Games placeholder</p>
          </div>
          <div className="gameExamples">
            <h5>Game Examples:</h5>
            <ol>
              <li>
                <StyledLink to={`/game/${gameId}`}>
                  Game title placeholder
                </StyledLink>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
