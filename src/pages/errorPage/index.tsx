import { useNavigate } from "@tanstack/react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <main className="page-error">
      <h1 className="page-error__title">Ooops!, you are lost</h1>
      <p className="page-error__description">
        the page you are looking is Not Found
      </p>
      <button className="btn btn__back" onClick={() => navigate({ to: "/" })}>
        back to home
      </button>
    </main>
  );
};
export default ErrorPage;
