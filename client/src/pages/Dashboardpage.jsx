import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <Link to="/dashboard/weather">Weather</Link>
      <Link to="/dashboard/stocks">Stocks</Link>
      <Link to="/dashboard/crypto">Crypto Currency</Link>

      <Outlet />
    </>
  );
}
