import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <main>
      <h1>Oops!</h1>
      <p>Sorry, an error has occurred.</p>
      <p>
        <em>{error.statusText || error.message}</em>
      </p>
    </main>
  );
};

export default Error;
