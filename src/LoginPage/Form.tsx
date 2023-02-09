import React, { useRef } from "react";
import styled from "styled-components";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "../Firebase/firebase";

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

export const Form: React.FC<any> = () => {
  const phoneNumberRef = useRef<HTMLInputElement | null>(null);
  const otpRef = useRef<HTMLInputElement | null>(null);

  const isValid = (phoneNumber: string, otp: number) => {
    if (!phoneNumber) {
      alert("Please enter valid Phone Number");
      return false;
    }
    if (!otp) {
      alert("Please enter valid OTP");
      return false;
    }
  };
  const signInWithPhone = (phoneNumber: string) => {
    try {
      console.log("PhoneNumber", phoneNumber);
      signInWithPhoneNumber(
        auth,
        phoneNumber,
        new RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "normal",
            callback: (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              console.log("this is recaptcha");
            },
            "expired-callback": () => {
              // Response expired. Ask user to solve reCAPTCHA again.
              // ...
              console.log("expired");
            },
          },
          auth
        )
      ).then((res) => console.log({ res }));
    } catch (error) {
      return error;
    }
  };
  const handleSubmit = () => {
    let phoneNumberValue = phoneNumberRef.current?.value ?? "";
    let OTPValue = parseFloat(otpRef.current?.value ?? "");

    // console.log({
    //   phno: phoneNumberRef.current?.value,
    //   otp: otpRef.current?.value,
    // });
    // window.recaptchaVerifier = new RecaptchaVerifier(
    //   "sign-in-button",
    //   {
    //     size: "invisible",
    //     callback: (response) => {
    //       // reCAPTCHA solved, allow signInWithPhoneNumber.
    signInWithPhone(phoneNumberValue);
    //       console.log("Reacptcha callback");
    //     },
    //   },
    //   auth
    // );
  };

  return (
    <FormWrapper>
      <WelcomeTextWrapper>Welcome back</WelcomeTextWrapper>
      <HelpTextWrapper>Please enter your details.</HelpTextWrapper>
      <LabelWrapper>Phone Number</LabelWrapper>
      <InputWrapper placeholder="Phone Number" ref={phoneNumberRef} />
      <LabelWrapper>One Time Password</LabelWrapper>
      <InputWrapper placeholder="******" ref={otpRef} />
      <SignInBtnWrapper onClick={handleSubmit}>Sign in</SignInBtnWrapper>
    </FormWrapper>
  );
};
