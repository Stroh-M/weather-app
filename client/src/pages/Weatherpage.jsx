import { useState } from "react";
import Heading from "../components/Heading";
import axios from "axios";
import Weathercard from "../components/weathercard";
import { Outlet } from "react-router-dom";
import "../styles/weatherpage.css";
import Input from "../components/input";
import CircularProgress from "@mui/material/CircularProgress";
import WeatherNav from "../components/weatherNav";

export default function Weatherpage() {
  const [inputLocation, setInputLocation] = useState("");
  const [currentWeatherObject, setCurrentWeatherObject] = useState({});
  const [fetchedData, setFetchedData] = useState(false);
  const [loading, setLoading] = useState(false);

  function changeHandler(e) {
    setInputLocation(e.target.value);
    console.log(inputLocation);
  }

  async function fetchData(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.get(
        `http://localhost:5000/weather/current/${inputLocation}`,
        { withCredentials: true }
      );
      console.log(result);
      setCurrentWeatherObject(result.data);
      setFetchedData(true);
      setLoading(false);
      setInputLocation("");
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
      <div className="weather-page">
        <WeatherNav />
        <Heading text="Weather" />
        <form className="weather-form">
          <Input
            change={changeHandler}
            type="text"
            name="location"
            value={inputLocation}
            placeholder="Enter zip code...."
          />
          <button className="go-button-current" onClick={fetchData}>Go</button>
        </form>
        {!fetchedData && <p className="instruction-paragraph">Enter a zip code to get the weather</p>}
        {loading && <CircularProgress />}
        {fetchedData && (
          <Weathercard
            location={currentWeatherObject.location.name}
            region={currentWeatherObject.location.region}
            temp={currentWeatherObject.current.temp_f}
            condition={currentWeatherObject.current.condition.text}
            conditionIcon={currentWeatherObject.current.condition.icon}
            wind={currentWeatherObject.current.wind_mph}
            humidity={currentWeatherObject.current.humidity}
            feelslike={currentWeatherObject.current.feelslike_f}
            windDirection={currentWeatherObject.current.wind_dir}
            gustMph={currentWeatherObject.current.gust_mph}
            lastUpdated={currentWeatherObject.current.last_updated}
            precipationInches={currentWeatherObject.current.precip_in}
          />
        )}
      </div>

      <Outlet />
    </>
  );
}
