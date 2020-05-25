import React from "react";
import styled from "styled-components";

const Link = styled.h4`
  color: lightgrey;
  font-weight: bold;
`;

const Navbar = (props) => {
  return (
    <div className="navbar navbar-expand-md bg-dark fixed-top">
      <Link>Games</Link>
    </div>
  );
};

export default Navbar;
