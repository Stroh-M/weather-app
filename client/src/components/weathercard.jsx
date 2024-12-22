import "../styles/weathercard.css";
import { useState } from "react";

export default function Weathercard(props) {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div className="weather-card">
        <div className="location-area">
          <span>
            {props.location}, {props.region}, {props.country}
          </span>
        </div>
        <div className="temperature-area">
          <h2>{props.temp} &deg;F</h2>
        </div>
        <div className="condition-area">
          <img
            className="condition-icon"
            src={props.conditionIcon}
            alt={props.condition}
          />
          <figcaption>{props.condition}</figcaption>
        </div>
        <p
          className="show-more"
          onClick={() => {
            if (!showMore) {
              setShowMore(true);
            } else if (showMore) {
              setShowMore(false);
            }
          }}
        >
          {showMore ? "show less..." : "show more..."}
        </p>
        {showMore && (
          <div className="details">
            <p>Wind: {props.wind} mph</p>
            <p>Wind direction: {props.windDirection}</p>
            <p>Humidity: {props.humidity}%</p>
            <p>feelslike: {props.feelslike} &deg;F</p>
            <p>Gust mph: {props.gustMph}</p>
            <p>Precipation inches: {props.precipationInches}"</p>
          </div>
        )}
        <aside className="last-updated">
          Last Updated: {props.lastUpdated}
        </aside>
      </div>
    </>
  );
}
