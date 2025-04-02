import { useEffect, useState } from "react";
import Heading from "../components/Heading.jsx";
import axios from "axios";
import Weathercard from "../components/weathercard";
import "../styles/weatherpage.css";
import CircularProgress from "@mui/material/CircularProgress";
import WeatherForm from "../components/weatherform";
import Forecastcards from "../components/forecastcards";

export default function Weatherpage() {
  const [currentWeatherObject, setCurrentWeatherObject] = useState({});
  const [fetchedData, setFetchedData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [geolocation, setGeolocation] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((p) => {
      setGeolocation(`${p.coords.latitude},${p.coords.longitude}`);
      
    }, function(error) {
      if (error.code == error.PERMISSION_DENIED) {
        setGeolocation("");
        setLoading(false);
        setFetchedData(false);
        setError(false);
      }
    });
  }, [Weatherpage]);

  useEffect(() => {
    parseFloat(geolocation);
    fetchData(geolocation);
  }, [geolocation]);

  async function fetchData(location) {
    setLoading(true);
    setFetchedData(false);
    try {
      const result = await axios.get(
        `http://localhost:5000/weather/current/${location}`,
        { withCredentials: true }
      );
      if (result.data.message === "invalid location") {
        setError(true);
        setLoading(false);
        setFetchedData(false);
        setCurrentWeatherObject(result.data);
      } else {
        console.log(result);
        setCurrentWeatherObject(result.data);
        setFetchedData(true);
        setLoading(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
      {console.log(geolocation)}
      <div className="weather-page">
        <Heading text="Weather" />
        <WeatherForm className="go-button-current" submit={fetchData} />
        {error && <aside>{currentWeatherObject.message}</aside>}
        {!fetchedData && (
          <p className="instruction-paragraph">
            Enter a zip code to get the weather
          </p>
        )}
        {loading && <CircularProgress />}
        {fetchedData && (
          <div className="weather-card-container">
            <Weathercard
              result={currentWeatherObject}
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
              country={currentWeatherObject.location.country}
            />
            <Forecastcards info={currentWeatherObject.forecast} />
          </div>
        )}
      </div>
    </>
  );
}
