import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkStyle = styled(Link)`
  font-weight: bold;
  color: lightgray;
  &:hover {
    color: lightgray;
    opacity: 0.7;
  }
`;

const Navbar = (props) => {
  return (
    <div className="navbar navbar-expand-md fixed-top justify-content-between">
      <h4>
        <LinkStyle to="/1">Games</LinkStyle>
      </h4>
      <h4>
        <LinkStyle to="/developers">Developers</LinkStyle>
      </h4>
      <h4>
        <LinkStyle to="/publishers">Publishers</LinkStyle>
      </h4>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Navbar;
