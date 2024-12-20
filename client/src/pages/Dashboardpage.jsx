import { NavLink, Outlet } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../styles/dashboard.css";
import { useState } from "react";

export default function Dashboard() {
  const [isHoveredOver, setIsHoveredOver] = useState(false);
  function onMouseOverHandler() {
    setIsHoveredOver(true);
  }

  function mouseOutHandler() {
    setIsHoveredOver(false)
  }
  return (
    <>
      <div>
        <nav className="website-nav">
          <NavLink onMouseOver={onMouseOverHandler} onMouseOut={mouseOutHandler} to="/">
            <ArrowBackIcon   fontSize={isHoveredOver ? "medium" : "small"}  />
          </NavLink>
        </nav>
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
      </div>

      <Outlet />
    </>
  );
}
