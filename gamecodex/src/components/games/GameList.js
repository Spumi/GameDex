import React, { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "./GameCard";
import { Link } from "react-router-dom";

function GameList(props) {
  const [state, setstate] = useState({ games: {results: []} });
  const [page, setPage] = useState({ page: 1 });

  useEffect(() => {
    if (props.match.path !== "/"){
      setPage({page: props.match.params.page});
    }
    else
      setPage({page: 1});
    
    axios({
      method: "GET",
      url: "https://rawg-video-games-database.p.rapidapi.com/games?page="+parseInt(page.page),
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "971e449173msh49c1dda89321109p14cd1fjsn3a2338239d1e",
        useQueryString: true,
      },
    })
      .then((response) => {
        setstate({ games: response.data });
        console.log(props.match.params.page)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.match.params]);


  return (
    <div>
      <button>Previous</button>
      <Link to={`/${parseInt(page.page) + 1}`}>
        <button> Next</button>
      </Link>
    <div className="row">
      <div className="col">
        <div className="row">
          {state.games.results.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default GameList;
