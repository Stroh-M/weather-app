import { useState } from "react";
import Heading from "../components/Heading";
import axios from "axios";
import Weathercard from "../components/weathercard";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/weatherpage.css";
import Input from "../components/input";

export default function Weatherpage() {
  const [inputLocation, setInputLocation] = useState("");
  const [currentWeatherObject, setCurrentWeatherObject] = useState({});
  const [fetchedData, setFetchedData] = useState(false);

  function changeHandler(e) {
    setInputLocation(e.target.value);
    console.log(inputLocation);
  }

  async function fetchData(e) {
    e.preventDefault();
    const result = await axios.get(
      `http://localhost:5000/weather/current/${inputLocation}`,
      { withCredentials: true }
    );
    console.log(result);
    setCurrentWeatherObject(result.data);
    setFetchedData(true);
    setInputLocation("");
  }

  return (
    <>
      <div className="weather-page">
        <nav>
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
        <Heading text="Weather" />
        <form>
          <Input
            change={changeHandler}
            type="text"
            name="location"
            value={inputLocation}
            placeholder="Enter zip code...."
          />
          <button onClick={fetchData}>Go</button>
        </form>
        {fetchedData && (
          <Weathercard
            location={currentWeatherObject.location.name}
            temp={currentWeatherObject.current.temp_f}
            condition={currentWeatherObject.current.condition.text}
            conditionIcon={currentWeatherObject.current.condition.icon}
          />
        )}
      </div>

      <Outlet />
    </>
  );
}
