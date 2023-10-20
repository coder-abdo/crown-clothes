export const SignUp = () => {
  return (
    <div>
      <h1>sign up with email and password</h1>
      <form autoComplete="none">
        <div>
          <label htmlFor="displayName">Name</label>
          <input type="text" name="displayName" placeholder="Enter Your Name" />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" name="email" placeholder="Enter Your Email" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
