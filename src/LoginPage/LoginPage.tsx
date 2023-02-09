import React from "react";
import { Form } from "./Form";
import BgImg from "../images/background.jpeg";
import { LoginPageWrapper, BackgroundImageCmp } from "./styled-components";

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <Form />
      <BackgroundImageCmp src={BgImg} alt="bg-img" loading="lazy" />
    </LoginPageWrapper>
  );
};

export default LoginPage;
