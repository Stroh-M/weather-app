import { Link } from "react-router-dom";

export default function Errorpage() {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to="/">home</Link>
      <Link to="/signup">Sign Up</Link>
    </>
  );
}
