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
          <li><Link to="/dashboard/weather">Dashboard</Link></li>
        </ul>
      </nav>
      <h1>Home Page</h1>
      <p></p>
    </>
  );
}
