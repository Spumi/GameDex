import React from "react";
import styled from "styled-components";

const CenterDiv = styled.div`
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const StyledH3 = styled.h3`
  color: lightgray;
`;

const StyledLabel = styled.label`
  margin: 10px;
  color: lightgray;
`;

const StyledButton = styled.button`
  margin-top: 30px;
  width: 50%;
  align-self: center;
`;

function LogIn(props) {
  return (
    <React.Fragment>
      <CenterDiv className="card">
        <StyledH3>Login</StyledH3>
        <StyledLabel>
          <b>Username</b>
        </StyledLabel>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        ></input>
        <StyledLabel>
          <b>Password</b>
        </StyledLabel>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        ></input>
        <StyledButton
          type="submit"
          className="signupbtn"
          onClick="LoginRequest"
        >
          Login
        </StyledButton>
      </CenterDiv>
    </React.Fragment>
  );
}

export default LogIn;
