import { NavLink, Outlet } from "react-router-dom";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div>
        <nav className="dashboard-nav">
          <NavLink className={({isActive}) => {isActive ? "active-link" : ""}} to="/dashboard/weather">
            Weather
          </NavLink>

          <NavLink className={({isActive}) => (isActive ? "active-link" : "")} to="/dashboard/stocks">
            Stocks
          </NavLink>

          <NavLink className={({isActive}) => (isActive ? "active-link" : "")} to="/dashboard/crypto">
            Crypto Currency
          </NavLink>
        </nav>
      </div>

      <Outlet />
    </>
  );
}
