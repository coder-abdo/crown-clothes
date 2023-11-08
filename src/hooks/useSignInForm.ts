import { FirebaseError } from "firebase/app";
import { AuthErrorCodes } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import {
  loginWithEmailAndPassword,
  signInWithGooglePopup,
} from "@/utils/firebase";
import { signInSchema } from "@/utils/forms";
import { zodResolver } from "@hookform/resolvers/zod";

export const useSignInForm = () => {
  const INVALIDPASSWORD = AuthErrorCodes.INVALID_PASSWORD;
  const INVALIDUSER = AuthErrorCodes.USER_DELETED;
  const INVALID_LOGIN_CREDENTIALS = "auth/invalid-login-credentials";
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    toast.success("success login with google");
    navigate({ to: "/" });
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
      await loginWithEmailAndPassword(data.email, data.password);
      toast.success("success login");
      navigate({ to: "/" });
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
