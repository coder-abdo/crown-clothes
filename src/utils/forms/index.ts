import { z } from "zod";

export const signupSchema = z
  .object({
    displayName: z.string().nonempty("this field is required"),
    email: z.string().email(),
    password: z.string().min(6, "password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passowrds are not match",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
