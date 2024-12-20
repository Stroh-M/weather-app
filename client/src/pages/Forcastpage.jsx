import "../styles/forecastpage.css";
import { NavLink } from "react-router-dom";

export default function Forecastpage() {
  return (
    <>
      <div className="forecast-page">
        <nav>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/dashboard/forecast"
          >
            Forecast
          </NavLink>

          <NavLink end to={"/dashboard/weather"}>
            Current
          </NavLink>
        </nav>
        <h1>this is the forecast page</h1>
      </div>
    </>
  );
}
