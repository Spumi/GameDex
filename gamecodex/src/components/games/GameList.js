import React, { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "./GameCard";

function GameList(props) {
  const [state, setstate] = useState({ games: [] });

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://rawg-video-games-database.p.rapidapi.com/games",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "971e449173msh49c1dda89321109p14cd1fjsn3a2338239d1e",
        useQueryString: true,
      },
    })
      .then((response) => {
        setstate({ games: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="filters"></div>
      <div className="row">
        <div className="col">
          <div className="row">
            {state.games.map((g) => (
              <GameCard key={g.id} game={g} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GameList;
