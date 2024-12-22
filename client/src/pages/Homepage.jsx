import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import CircularProgress from "@mui/material/CircularProgress";

export default function Homepage() {
    const {isLoggedIn, loading} = useAuth();
    if (loading) return <CircularProgress />


  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!isLoggedIn && <li>
            <Link to="/signup">Sign Up</Link>
          </li>}
          {!isLoggedIn && <li><Link to="/login">Log In</Link></li>}
          {isLoggedIn && <li><Link to="/dashboard">Dashboard</Link></li>}
        </ul>
      </nav>
      <h1>Home Page</h1>
    </>
  );
}
