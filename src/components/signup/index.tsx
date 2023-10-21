import { useSignupForm } from "../../hooks/useSignupForm";

export const SignUp = () => {
  const { errors, register, handleSignUp, handleSubmit } = useSignupForm();
  console.log(errors);
  return (
    <div>
      <h1>sign up with email and password</h1>
      <form
        autoComplete="none"
        noValidate
        onSubmit={handleSubmit(handleSignUp)}
      >
        <div>
          <label htmlFor="displayName">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            id="displayName"
            {...register("displayName")}
          />
          {errors.displayName && <p>{errors.displayName.message}</p>}
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Enter Your Email"
          />

          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Enter Your Password"
          />

          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label htmlFor="confirmPassword">password</label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
            placeholder="Enter Your Confirm Password"
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
