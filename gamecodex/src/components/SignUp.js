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
    Username: "asd",
    Password: "asd",
  };
  axios
    .post("https://localhost:44363/api/users", user)
    .then((response) => {
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
            required
          ></input>
          <StyledLabel>
            <b>Password</b>
          </StyledLabel>
          <input
            type="password"
            placeholder="Enter Password"
            name="Password"
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
