import { useSignInForm } from "@/hooks/useSignInForm";
import { FormControl } from "@/components/forms/formContainer";
import GoogleIcon from "@/assets/google.png";
export const SignInForm = () => {
  const { handleLogin, handleSubmit, errors, register, signInWithGoogle } =
    useSignInForm();
  return (
    <form className="form" onSubmit={handleSubmit(handleLogin)} noValidate>
      <FormControl
        label="email"
        isError={!!errors.email}
        message={errors.email?.message}
      >
        <input
          type="email"
          className="form-input"
          placeholder="email"
          id="email"
          {...register("email")}
        />
      </FormControl>
      <FormControl
        label="password"
        isError={!!errors.password}
        message={errors.password?.message}
      >
        <input
          type="password"
          className="form-input"
          placeholder="password"
          id="password"
          {...register("password")}
        />
      </FormControl>
      <div className="btns-group">
        <button className="btn" type="submit">
          sign in
        </button>
        <button
          className="btn btn__with-icon"
          type="button"
          onClick={signInWithGoogle}
        >
          <img className="icon" src={GoogleIcon} alt="google icon" />
          signin with google
        </button>
      </div>
    </form>
  );
};
