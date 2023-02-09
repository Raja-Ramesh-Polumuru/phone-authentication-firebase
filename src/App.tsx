import React from "react";
import styled from "styled-components";
import "./App.css";
import LoginPage from "./LoginPage/LoginPage";

const MainSectionWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
function App() {
  return (
    <MainSectionWrapper>
      <LoginPage />
    </MainSectionWrapper>
  );
}

export default App;
