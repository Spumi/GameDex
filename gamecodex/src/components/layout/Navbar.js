import React from "react";
import styled from "styled-components";

const Link = styled.h4`
  color: lightgrey;
  font-weight: bold;
`;

const Navbar = (props) => {
  return (
    <div className="navbar navbar-expand-md bg-dark fixed-top justify-content-between">
      <Link>Games</Link>
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Navbar;
