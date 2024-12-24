import { NavLink } from "react-router-dom";

export default function DashboardNav() {
  return (
    <nav className="dashboard-nav">
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "")}
        
        to="/dashboard/weather"
      >
        Weather
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "")}
        to="/dashboard/stocks"
      >
        Stocks
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "")}
        to="/dashboard/crypto"
      >
        Crypto Currency
      </NavLink>
    </nav>
  );
}
