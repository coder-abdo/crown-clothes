import { FirebaseError } from "firebase/app";
import { AuthErrorCodes } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import {
  createUserFromAuth,
  loginWithEmailAndPassword,
  signInWithGooglePopup,
} from "@/utils/firebase";
import { signInSchema } from "@/utils/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCurrentUser } from "@/contexts/userContext";

export const useSignInForm = () => {
  const INVALIDPASSWORD = AuthErrorCodes.INVALID_PASSWORD;
  const INVALIDUSER = AuthErrorCodes.USER_DELETED;
  const INVALID_LOGIN_CREDENTIALS = "auth/invalid-login-credentials";
  const { setCurrentUser } = useCurrentUser();
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithGooglePopup();
    createUserFromAuth(result.user);
    setCurrentUser(result.user);
    toast.success("success login with google");
    navigate("/");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  });
  const handleLogin: SubmitHandler<z.infer<typeof signInSchema>> = async (
    data,
  ) => {
    try {
      const user = await loginWithEmailAndPassword(data.email, data.password);
    setCurrentUser(user);
      toast.success("success login");
      navigate("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (
          error.code === INVALIDPASSWORD ||
          error.code === INVALIDUSER ||
          error.code === INVALID_LOGIN_CREDENTIALS
        ) {
          toast.error("Email Or Password incorrect");
          return;
        }
      }
    }
  };
  return { signInWithGoogle, register, handleSubmit, handleLogin, errors };
};
