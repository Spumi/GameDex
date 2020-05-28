import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GameCard from "./GameCard";
import { Link } from "react-router-dom";
import PageContext from "../../pageContext";
import queryString from 'query-string'


function GameList(props) {
  const [state, setstate] = useState({ games: {results: []} });
  const [page, setPage] = useState({ page: 1 });
  const pc = useContext(PageContext);
  const [platform, setPlatform] = useState({ platforms: [] });
  const [sort, setsort] = useState({order: ""})

  useEffect(() => {if (props.match.path !== "/"){
    setPage({page: props.match.params.page});
    if (pc.page !=  props.match.params.page)
      pc.page = props.match.params.page;
  }
  else
    setPage({page: 1});
  },[props.match.params.page, sort.order])


  useEffect(() => {
    
    axios({
      method: "GET",
      url: "https://rawg-video-games-database.p.rapidapi.com/games?" +"ordering=" +
       queryString.parse(props.location.search).order+ "&page="+parseInt(pc.page),
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "971e449173msh49c1dda89321109p14cd1fjsn3a2338239d1e",
        useQueryString: true,
      },
    })
      .then((response) => {
        setstate({ games: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pc.page, sort.order]);

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
    
    let order = queryString.parse(props.location.search)
    console.log("order: " + order.order)

    return(
      <Link to={{
        pathname: parseInt(pc.page) + 1,
        search: sort.order !== ""? "?order=" + sort.order : "", 
        state: { fromDashboard: true }
      }}>
        <button> Next</button>
      </Link>
    )
  }

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
        <label>Filters: </label>
        <select className="orderSelector" onChange={
          (e) => {
            setsort({order: e.target.value})
            // window.location.href= (props.match.params.page !== "undefined"? 1 : props.match.params.page) + "&order=" + e.target.value
            props.history.push({
              pathname: pc.page,
              search: "?" + new URLSearchParams({order: e.target.value}).toString()
          })
        }
      }>
          <option value="">Select an order</option>
          <option value="name">Name</option>
          <option value="released">Release Date</option>
          <option value="rating">Rating</option>
        </select>
        <select className="platformSelector">
          <option value="AllPlatforms">Select a platform</option>
          {platform.platforms.map((p) => (
            <option value={p.id}>{p.name}</option>
          ))}
        </select>
        <button type="submit">
          Filter
        </button>
      </div>
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
    </React.Fragment>
  );
}

export default GameList;
