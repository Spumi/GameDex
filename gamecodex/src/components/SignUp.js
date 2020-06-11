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

const AddUser = (event) => {
  event.preventDefault();
  const user = {
    Username: document.getElementsByClassName("username")[0].value,
    Password: document.getElementsByClassName("password")[0].value,
  };
  axios
    .post("https://localhost:44363/api/users", user)
    .then((response) => {
      if (response.data.id === 0) {
        window.alert("This username is already taken.");
      } else {
        window.alert("Successfully registered.");
      }
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

function SignUp(props) {
  return (
    <React.Fragment>
      <CenterDiv className="card">
        <StyledH3>Sign Up</StyledH3>
        <StyledForm onSubmit={(event) => AddUser(event)}>
          <StyledLabel>
            <b>Username</b>
          </StyledLabel>
          <input
            type="text"
            placeholder="Enter Username"
            name="Username"
            className="username"
            minLength={3}
            maxLength={18}
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
            minLength={6}
            maxLength={18}
            required
          ></input>
          <StyledInput
            type="submit"
            className="signupbtn"
            value="Sign up"
          ></StyledInput>
        </StyledForm>
      </CenterDiv>
    </React.Fragment>
  );
}

export default SignUp;
