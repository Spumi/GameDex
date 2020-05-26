import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: blue;
`;

function PublisherInfo(props) {
  return (
    <div className="publisherInfo">
      <div className="publisherName">
        <h2>Publisher Company Name</h2>
      </div>
      <div className="description">
        <h5>About:</h5>
        <p>Description placeholder</p>
      </div>
    </div>
  );
}
