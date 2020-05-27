import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: blue;
`;

const Sprite = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

function GameCard(props) {
  const [gameId, setGameId] = useState("");
  const [gameImage, setGameImage] = useState("");
  const [developerId, setDeveloperId] = useState("");
  const [publisherId, setPublisherId] = useState("");

  const [state, setstate] = useState({
    game: {
      developers: [],
      publishers: [],
    },
  });

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://rawg-video-games-database.p.rapidapi.com/games/${props.game.id}`,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "971e449173msh49c1dda89321109p14cd1fjsn3a2338239d1e",
        useQueryString: true,
      },
    })
      .then((response) => {
        setstate({ game: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.game.id]);
  let devs = "";
  devs += state.game.developers.map((dev) => {
    return dev.name;
  });

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <StyledLink to={`/game/${state.game.id}`}>
            <Sprite className="GameImage" src={state.game.background_image} />
            <h5>{state.game.name}</h5>
          </StyledLink>
          <div className="card-body">
            <div className="GameCard">
              <div className="developerRoute">
                <h6>Developer:</h6>
                {state.game.developers.map((dev) => {
                  return (
                    <StyledLink key={dev.id} to={`/developer/${dev.id}`}>
                      <h6>{dev.name}</h6>
                    </StyledLink>
                  );
                })}
              </div>
              <div className="publisherRoute">
                <h6>Publisher:</h6>
                {state.game.publishers.map((pub) => {
                  return (
                    <StyledLink key={pub.id} to={`/publisher/${pub.id}`}>
                      <h6>{pub.name}</h6>
                    </StyledLink>
                  );
                })}
              </div>
              <div className="ratingInfo">
                <h6>Rating: {state.game.rating}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
