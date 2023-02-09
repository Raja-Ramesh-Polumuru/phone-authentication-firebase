import React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: grid;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
  background-color: #f9fcf9;
  color: #0c363d;
  font-family: "Lato", sans-serif; ;
`;
const InputWrapper = styled.input`
  width: 100%;
  padding: 10px 20px;
  border-radius: 4px;
  border: 1px solid #adbdb5;
  ::placeholder {
    color: #839194;
  }
`;
const WelcomeTextWrapper = styled.h2``;
const HelpTextWrapper = styled.p``;
const LabelWrapper = styled.label`
  text-align: left;
`;
const SignInBtnWrapper = styled.button``;

export const Form = () => {
  return (
    <FormWrapper>
      <WelcomeTextWrapper>Welcome back</WelcomeTextWrapper>
      <HelpTextWrapper>Please enter your details.</HelpTextWrapper>
      <LabelWrapper>Phone Number</LabelWrapper>
      <InputWrapper placeholder="Phone Number" />
      <LabelWrapper>One Time Password</LabelWrapper>
      <InputWrapper placeholder="OTP" />
      <SignInBtnWrapper>Sign in</SignInBtnWrapper>
    </FormWrapper>
  );
};
