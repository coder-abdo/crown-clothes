import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signupSchema } from "../utils/forms";
import { z } from "zod";
import {
  createUserFromAuth,
  createUserFromEmailAndPassword,
} from "../utils/firebase";
import { FirebaseError } from "firebase/app";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const useSignupForm = () => {
  const ALREADYEXISTEMAILERR = "auth/email-already-in-use";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
  });
  const handleSignUp: SubmitHandler<z.infer<typeof signupSchema>> = async (
    data,
  ) => {
    try {
      const user = await createUserFromEmailAndPassword(
        data.email,
        data.password,
      );
      await createUserFromAuth(user, { displayName: data.displayName });
      toast.success("success created user");
      navigate("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === ALREADYEXISTEMAILERR) {
          toast.error("this email is already exist");
          return;
        }
      }
    }
  };

  return { register, errors, handleSubmit, handleSignUp };
};