import { useCallback, useState } from "react";
import { SignUp } from "../../components/signup";

import { SignInForm } from "../../components/signin";

const SignIn = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleSignIn = useCallback(() => {
    setIsSignup((prev) => !prev);
  }, []);
  return (
    <div>
      <h1>{isSignup ? "welcome back" : "sign up"}</h1>
      {isSignup ? <SignUp /> : <SignInForm />}
      <a role="button" rel="noopener noreferrer" onClick={toggleSignIn}>
        {isSignup ? "already have an account?" : "have not yet an account?"}
      </a>
    </div>
  );
};

export default SignIn;
