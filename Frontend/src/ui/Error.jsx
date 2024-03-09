import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Error;
