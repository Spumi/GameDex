import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function UserPage(props) {
  const [user, setUser] = useState("");

  return (
    <div className="userPage">
      <h2>{user.name}</h2>
      <h4>Registered: {user.regDate}</h4>
    </div>
  );
}

export default UserPage;
