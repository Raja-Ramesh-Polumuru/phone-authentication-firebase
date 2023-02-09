import React from "react";
import styled from "styled-components";
import { Form } from "./Form";
import BgImg from "../images/background.jpeg";

const LoginPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;
const BackgroundImageCmp = styled.img`
  width: 50vw;
  height: 100vh;
  background-size: cover;
`;



const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <Form  />
      <BackgroundImageCmp src={BgImg} alt="bg-img" loading="lazy" />
    </LoginPageWrapper>
  );
};

export default LoginPage;
