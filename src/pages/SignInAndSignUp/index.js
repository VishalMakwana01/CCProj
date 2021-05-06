import React from "react";

import SignIn from "../../components/SignIn/index";
import SignUp from "../../components/SignUp/index";
import { SignInAndSignUpWrapper } from "./styles";

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUpWrapper>
      <SignIn />
      <SignUp />
    </SignInAndSignUpWrapper>
  );
};

export default SignInAndSignUpPage;
