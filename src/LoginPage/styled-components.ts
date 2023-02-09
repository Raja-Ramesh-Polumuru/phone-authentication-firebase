import styled from "styled-components";

export const FormWrapper = styled.div`
  display: grid;
  align-items: center;
  align-content: center;
  background-color: #f9fcf9;
  color: #0c363d;
  font-family: "Lato", sans-serif;
  grid-gap: 10px;
  width: 300px;
`;
export const InputWrapper = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #adbdb5;
  ::placeholder {
    color: #839194;
  }
`;
export const WelcomeTextWrapper = styled.h2`
  margin: 4px 10px;
`;
export const HelpTextWrapper = styled.p`
  font-size: 12px;
  margin: 4px 10px;
`;
export const LabelWrapper = styled.label`
  text-align: left;
  font-size: 12px;
  font-weight: bold;
`;
export const SignInBtnWrapper = styled.button`
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  background-color: #466543;
  color: #e8fae7;
  justify-self: center;
  border: none;
  border-radius: 4px;
  padding: 10px 5px;
  cursor: pointer;
`;
export const HeaderTextWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;
export const FormItemWrapper = styled.div`
  display: grid;
  width: 100%;
`;
export const BackGroundWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
export const LoginPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;
export const BackgroundImageCmp = styled.img`
  width: 50vw;
  height: 100vh;
  background-size: cover;
`;
