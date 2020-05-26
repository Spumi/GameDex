import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkStyle = styled(Link)`
  font-weight: bold;
  color: lightgray;
`;

const Navbar = (props) => {
  return (
    <div className="navbar navbar-expand-md bg-dark fixed-top justify-content-between">
      <h4>
        <LinkStyle to="/">Games</LinkStyle>
      </h4>
      <h4>
        <LinkStyle to="/developers">Developers</LinkStyle>
      </h4>
      <h4>
        <LinkStyle to="/publishers">Publishers</LinkStyle>
      </h4>
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
