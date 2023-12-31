import { useSignupForm } from "@/hooks/useSignupForm";
import { FormControl } from "@/components/forms/formContainer";

export const SignUp = () => {
  const { errors, register, handleSignUp, handleSubmit } = useSignupForm();
  return (
    <form
      className="form"
      autoComplete="none"
      noValidate
      onSubmit={handleSubmit(handleSignUp)}
    >
      <FormControl
        label="display name"
        isError={!!errors.email}
        message={errors.email?.message}
      >
        <input
          type="text"
          placeholder="display name"
          id="displayName"
          className="form-input"
          {...register("displayName")}
        />
      </FormControl>
      <FormControl
        label="email"
        isError={!!errors.email}
        message={errors.email?.message}
      >
        <input
          type="email"
          placeholder="email"
          id="email"
          {...register("email")}
          className="form-input"
        />
      </FormControl>
      <FormControl
        label="password"
        isError={!!errors.password}
        message={errors.password?.message}
      >
        <input
          type="password"
          placeholder="password"
          id="password"
          className="form-input"
          {...register("password")}
        />
      </FormControl>
      <FormControl
        label="confirm password"
        isError={!!errors.confirmPassword}
        message={errors.confirmPassword?.message}
      >
        <input
          type="password"
          placeholder="confirm password"
          id="confirmPassword"
          {...register("confirmPassword")}
          className="form-input"
        />
      </FormControl>
      <button className="btn" type="submit">
        Sign Up
      </button>
    </form>
  );
};
