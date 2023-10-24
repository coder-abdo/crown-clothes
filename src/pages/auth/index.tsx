import { useCallback, useState } from "react";
import { SignUp } from "../../components/signup";

import { SignInForm } from "../../components/signin";

const SignIn = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleSignIn = useCallback(() => {
    setIsSignup((prev) => !prev);
  }, []);
  return (
    <div className="auth">
      <h1 className="auth__title">{isSignup ? "sign up" : "welcome back"}</h1>
      {isSignup ? <SignUp /> : <SignInForm />}
      <a
        className="auth__link"
        role="button"
        rel="noopener noreferrer"
        onClick={toggleSignIn}
      >
        {isSignup ? "already have an account?" : "have not yet an account?"}
      </a>
    </div>
  );
};

export default SignIn;
