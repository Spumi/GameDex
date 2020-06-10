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

const StyledInput = styled.input`
  margin-top: 30px;
  width: 50%;
  align-self: center;
`;

const StyledForm = styled.form`
  margin: auto;
`;

function SignUp(props) {
  return (
    <React.Fragment>
      <CenterDiv className="card">
        <StyledH3>Sign Up</StyledH3>
        <StyledForm action="https://localhost:44363/api/users" method="POST">
          <StyledLabel for="username">
            <b>Username</b>
          </StyledLabel>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          ></input>
          <StyledLabel for="psw">
            <b>Password</b>
          </StyledLabel>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
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
