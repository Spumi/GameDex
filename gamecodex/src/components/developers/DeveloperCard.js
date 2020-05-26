import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: blue;
`;

function DeveloperCard(props) {
  const [gameId, setGameId] = useState("");
  const [developerId, setDeveloperId] = useState("");

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <StyledLink to={`/developer/${developerId}`}>
            <h5>Developer Team Name</h5>
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

export default DeveloperCard;
