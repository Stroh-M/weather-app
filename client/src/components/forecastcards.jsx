import { Link } from "react-router-dom";

export default function Forecastcards(props) {
  return (
    <>
      {console.log(props.info)}
      {props.info.forecastday.map((day) => {
        return (
          <div
            className="forecast-cards"
            style={{ position: "relative" }}
            key={day.date_epoch}
          >
            <Link style={{ margin: "0px", display: "block" }} to={`/dashboard/weather/day/${day.date_epoch}`}>{day.date}</Link>

            <img src={day.day.condition.icon} />
            <figcaption>{day.day.condition.text}</figcaption>
            <div style={{ position: "absolute", top: "40%", left: "25%" }}>
              <span style={{ margin: "5px", fontSize: "1.8em" }}>
                {day.day.maxtemp_f} &deg;F
              </span>
              /<span>{day.day.mintemp_f} &deg;F</span>
            </div>
            <div style={{ position: "absolute", bottom: "5px", right: "5px" }}>
              Precipitation: {day.day.daily_chance_of_rain}%
            </div>
          </div>
        );
      })}
    </>
  );
}
