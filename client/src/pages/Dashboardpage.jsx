import { useNavigate, NavLink, Outlet } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../styles/dashboard.css";
import { useState } from "react";
import DashboardNav from "../components/dashboardNav";
import axios from "axios";

export default function Dashboard() {
  const navigate = useNavigate()
  const [isHoveredOver, setIsHoveredOver] = useState(false);
  function onMouseOverHandler() {
    setIsHoveredOver(true);
  }

  function mouseOutHandler() {
    setIsHoveredOver(false);
  }

async function logout() {
    const result = await axios.post(`http://localhost:5000/logout`, {}, {withCredentials: true});
    console.log(result.data);
    navigate("/");
  }
  return (
    <>
      <div>
        <nav className="website-nav">
          <NavLink
            onMouseOver={onMouseOverHandler}
            onMouseOut={mouseOutHandler}
            to="/"
          >
            <ArrowBackIcon fontSize={isHoveredOver ? "medium" : "small"} />
          </NavLink>
        </nav>
        <nav style={{position: "absolute", bottom: "30px", left: "20px"}}>
          <button onClick={logout}>Log Out</button>
        </nav>
        <DashboardNav />
      </div>

      <Outlet />
    </>
  );
}
