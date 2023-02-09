import React, { useEffect, useRef, useState } from "react";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { validateOTP, validatePhNum } from "./helper";
import {
  BackGroundWrapper,
  FormWrapper,
  HeaderTextWrapper,
  WelcomeTextWrapper,
  HelpTextWrapper,
  FormItemWrapper,
  LabelWrapper,
  InputWrapper,
  SignInBtnWrapper,
} from "./styled-components";

export const Form: React.FC<any> = () => {
  const phoneNumberRef = useRef<HTMLInputElement | null>(null);
  const otpRef = useRef<HTMLInputElement | null>(null);
  const [confirmationResult, setConfirmationResult] = useState<any>();
  const [isOTPInputVisible, setOTPInputVisible] = useState(false);
  const [appVerifier, setAppVerifier] = useState<any>();
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    setAppVerifier(
      new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "normal",
          callback: (response) => {
            console.log(response);
          },
          "expired-callback": () => {
            console.log("expired");
          },
        },
        auth
      )
    );
  }, []);

  const generateOtp = (phoneNumber: string) => {
    try {
      signInWithPhoneNumber(auth, phoneNumber, appVerifier).then((res) => {
        setConfirmationResult(res);
        setOTPInputVisible(true);
        setAppVerifier(null);
        const captchaNode = document.getElementById("recaptcha-container");
        if (captchaNode) {
          captchaNode.innerHTML = "";
        }
      });
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  const handleGenerateOTP = () => {
    let phoneNumberValue = phoneNumberRef.current?.value ?? "";
    if (validatePhNum(phoneNumberValue)) generateOtp(phoneNumberValue);
  };
  const handleSignIn = () => {
    const OTPVal = otpRef.current?.value ?? "";
    if (validateOTP(OTPVal))
      confirmationResult
        .confirm(OTPVal)
        .then((result) => {
          const user = result.user;
          if (user?.accessToken) {
            setUserLoggedIn(true);
          }
          console.log({ user });
        })
        .catch((error) => {
          console.error({ error });
        });
  };

  return (
    <BackGroundWrapper>
      <FormWrapper>
        {userLoggedIn ? (
          <>Successfully Logged in</>
        ) : (
          <>
            <HeaderTextWrapper>
              <WelcomeTextWrapper>Welcome back</WelcomeTextWrapper>
              <HelpTextWrapper>Please enter your details.</HelpTextWrapper>
            </HeaderTextWrapper>
            <FormItemWrapper>
              <LabelWrapper>Phone Number</LabelWrapper>
              <InputWrapper
                placeholder="Enter your phone number"
                ref={phoneNumberRef}
              />
            </FormItemWrapper>
            {isOTPInputVisible ? (
              <FormItemWrapper>
                <LabelWrapper>One Time Password</LabelWrapper>
                <InputWrapper placeholder="******" ref={otpRef} />
              </FormItemWrapper>
            ) : (
              <></>
            )}
            <div id="recaptcha-container"></div>
            {isOTPInputVisible ? (
              <SignInBtnWrapper onClick={handleSignIn}>
                Sign in
              </SignInBtnWrapper>
            ) : (
              <SignInBtnWrapper onClick={handleGenerateOTP}>
                Generate OTP
              </SignInBtnWrapper>
            )}
          </>
        )}
      </FormWrapper>
    </BackGroundWrapper>
  );
};
