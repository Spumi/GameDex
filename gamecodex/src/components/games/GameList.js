import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GameCard from "./GameCard";
import { Link } from "react-router-dom";
import PageContext from "../../pageContext";

function GameList(props) {
  const [state, setstate] = useState({ games: {results: []} });
  const [page, setPage] = useState({ page: 1 });
  const pc = useContext(PageContext);

  useEffect(() => {if (props.match.path !== "/"){
    setPage({page: props.match.params.page});
    if (pc.page !=  props.match.params.page)
      pc.page = props.match.params.page;
      console.log("pc: " + pc.page)
  }
  else
    setPage({page: 1});
  },[props.match.params.page])

  useEffect(() => {
    
    axios({
      method: "GET",
      url: "https://rawg-video-games-database.p.rapidapi.com/games?page="+parseInt(pc.page),
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
  }, [pc.page]);

  const prevButton = () =>{
    if (pc.page < 2){
      return null
    }else{
      return(
      <Link to={`/${parseInt(pc.page) - 1}`}>
        <button>Previous</button>
      </Link>
      )
    }
  }
  const nextButton = () =>{
    return(
      <Link to={`/${parseInt(pc.page) + 1}`}>
        <button> Next</button>
      </Link>
    )
  }

  return (
    <div>
      {prevButton()}
      {nextButton()}     
    <div className="row">
      <div className="col">
        <div className="row">
          {state.games.results.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </div>
    </div>
      {prevButton()}
      {nextButton()}     
    </div>
  );
}

export default GameList;
