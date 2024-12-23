import { NavLink, Outlet } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../styles/dashboard.css";
import { useState } from "react";
import DashboardNav from "../components/dashboardNav";


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
        <DashboardNav />
      </div>

      <Outlet />
      
    </>
  );
}
