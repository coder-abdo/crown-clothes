import { SignUp } from "../../components/signup";
import {
  createUserFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase";

const SignIn = () => {
  const signInWithGoogle = async () => {
    const result = await signInWithGooglePopup();
    createUserFromAuth(result.user);
  };
  return (
    <div>
      SignIn
      <button onClick={signInWithGoogle}>sign in with google</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
