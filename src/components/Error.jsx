import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error">
      <h2>Oops!</h2>
      <p>Sorry, the following error has occurred:</p>
      <p>
        <em>{error.statusText || error.message}</em>
      </p>
    </div>
  );
};

export default Error;
