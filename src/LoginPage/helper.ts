export const validateOTP = (otp: string) => {
  if (!otp) {
    alert("Please enter valid OTP");
    return false;
  }
  if (otp.length !== 6) {
    alert("Invalid OTP");
    return false;
  }
  return true;
};
export const validatePhNum = (phNum: string) => {
  if (!phNum || phNum.length > 13) {
    alert("Please enter valid Phone Number");
    return false;
  }
  return true;
};
