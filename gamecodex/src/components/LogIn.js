import React from "react";
import styled from "styled-components";
import axios from "axios";

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

const StyledInput = styled.input`
  margin-top: 30px;
  width: 50%;
  align-self: center;
`;

const StyledForm = styled.form`
  margin: auto;
`;

const LoginUser = (event) => {
  event.preventDefault();
  const user = {
    Username: document.getElementsByClassName("username")[0].value,
    Password: document.getElementsByClassName("password")[0].value,
  };
  axios
    .post("https://localhost:44363/api/login", user)
    .then((response) => {
      if (response.data.username === null) {
        window.alert("There is no account with this username/password.");
      } else {
        window.alert("Login successful.");
      }
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

function LogIn(props) {
  return (
    <React.Fragment>
      <CenterDiv className="card">
        <StyledH3>Login</StyledH3>
        <StyledForm onSubmit={(event) => LoginUser(event)}>
          <StyledLabel>
            <b>Username</b>
          </StyledLabel>
          <input
            type="text"
            placeholder="Enter Username"
            name="Username"
            className="username"
            required
          ></input>
          <StyledLabel>
            <b>Password</b>
          </StyledLabel>
          <input
            type="password"
            placeholder="Enter Password"
            name="Password"
            className="password"
            required
          ></input>
          <StyledInput
            type="submit"
            className="signupbtn"
            value="Login"
          ></StyledInput>
        </StyledForm>
      </CenterDiv>
    </React.Fragment>
  );
}

export default LogIn;
