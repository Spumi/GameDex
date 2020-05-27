import React, { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "./GameCard";

function GameList(props) {
  const [state, setstate] = useState({ games: [] });
  const [platform, setPlatform] = useState({ platforms: [] });

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

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://rawg-video-games-database.p.rapidapi.com/platforms",
      headers: {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "8c1c4d646amsh9f0dfeca786087ep1e32c8jsnf00e67f10d71",
        useQueryString: true,
      },
    })
      .then((response) => {
        setPlatform({ platforms: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="filterRow">
        <p>Filters:</p>
        <select className="orderSelector">
          <option value="DefaultSort">Select an order</option>
          <option value="Name">Name</option>
          <option value="ReleaseDate">Release Date</option>
          <option value="Rating">Rating</option>
        </select>
        <select className="platformSelector">
          <option>Select a platform</option>
          {platform.platforms.map((p) => (
            <option value={p.id}>{p.name}</option>
          ))}
        </select>
        <button type="submit">Filter</button>
      </div>
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
