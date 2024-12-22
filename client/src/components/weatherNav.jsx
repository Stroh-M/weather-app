import { NavLink } from "react-router-dom";

export default function WeatherNav() {
  return (
    <nav className="weather-nav">
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "")}
        to="/dashboard/forecast"
      >
        Forecast
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "")}
        end
        to={"/dashboard/weather"}
      >
        Current
      </NavLink>
    </nav>
  );
}
