import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GameCard from "./GameCard";
import { Link } from "react-router-dom";
import PageContext from "../../pageContext";
import queryString from "query-string";

function GameList(props) {
  const [state, setstate] = useState({ games: { results: [] } });
  const [page, setPage] = useState({ page: 1 });
  const pc = useContext(PageContext);
  const [platform, setPlatform] = useState({ platforms: [] });
  const [sort, setsort] = useState({ order: "" });
  const [filter, setFilter] = useState({ platforms: "" });

  useEffect(() => {
    if (props.match.path !== "/") {
      setPage({ page: props.match.params.page });
      if (pc.page != props.match.params.page) pc.page = props.match.params.page;
    } else setPage({ page: 1 });
  }, [pc.page, props.match.params.page, props.match.path, sort.order]);

  const buildQueryString = () => {
    let queryString = new URLSearchParams();
    if (sort.order !== "") queryString.append("ordering", sort.order);
    if (filter.platforms !== "")
      queryString.append("platforms", filter.platforms);
    queryString.append("page", pc.page);
    return queryString;
  };

  useEffect(() => {
    axios({
      method: "GET",
      url:
        "https://rawg-video-games-database.p.rapidapi.com/games?" +
        buildQueryString(),
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
  }, [pc.page, sort.order, filter.platforms, buildQueryString]);

  const internalQuery = () => {
    let queryString = new URLSearchParams();
    if (sort.order != "") queryString.append("order", sort.order);
    if (filter.platforms != "") queryString.append("sort", filter.platforms);
    return queryString.toString();
  };

  const prevButton = () => {
    if (pc.page < 2) {
      return null;
    } else {
      return (
        <Link
          to={{
            pathname: parseInt(pc.page) - 1,
            search: "?" + internalQuery(),
            state: { fromDashboard: true },
          }}
        >
          <button>Previous</button>
        </Link>
      );
    }
  };

  const nextButton = () => {
    return (
      <Link
        to={{
          pathname: parseInt(pc.page) + 1,
          search: "?" + internalQuery(),
          state: { fromDashboard: true },
        }}
      >
        <button> Next</button>
      </Link>
    );
  };

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
        <select
          className="orderSelector"
          onChange={(e) => {
            setsort({ order: e.target.value });
            // window.location.href= (props.match.params.page !== "undefined"? 1 : props.match.params.page) + "&order=" + e.target.value
            props.history.push({
              pathname: pc.page,
              search: "?" + internalQuery(),
            });
          }}
        >
          <option value="">Select an order</option>
          <option value="name">Name</option>
          <option value="-released">Release Date</option>
          <option value="-rating">Rating</option>
        </select>
        <select
          className="platformSelector"
          onChange={(e) => {
            setFilter({ platforms: e.target.value });
            // window.location.href= (props.match.params.page !== "undefined"? 1 : props.match.params.page) + "&order=" + e.target.value
            props.history.push({
              pathname: pc.page,
              search: "?" + internalQuery(),
            });
          }}
        >
          <option value="">Select a platform</option>
          {platform.platforms.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
        <div className="next-previous">
          {prevButton()}
          {nextButton()}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            {state.games.results.map((g) => (
              <GameCard key={g.id} game={g} />
            ))}
          </div>
        </div>
      </div>
      <div className="next-previous">
        {prevButton()}
        {nextButton()}
      </div>
    </React.Fragment>
  );
}

export default GameList;
