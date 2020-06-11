import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Axios from "axios";

function UserPage(props) {
  const [user, setUser] = useState("");

  /*useEffect(() => {
    Axios({
      method: "GET",
      url: "https://localhost:44363/api/users/" + props.user.id,
    });
  });*/

  return (
    <div className="userPage">
      <h2>{user.name}</h2>
      <h4>Registered: {user.regDate}</h4>
    </div>
  );
}

export default UserPage;
