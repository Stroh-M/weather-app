import Modal from "./modal";
import { useState } from "react";
import "../styles/forecastcard.css"

export default function Forecastcards(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [divIdClicked, setDivIdClicked] = useState("");

  function clickHandler(e) {
    setIsOpen(true);
    setDivIdClicked(e.target.id);
  }

  function close() {
    setIsOpen(false);
  }

  

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
            <div
              onClick={clickHandler}
              style={{ margin: "0px", display: "block", cursor: "pointer" }}
              className="date-link"
              id={day.date_epoch}
            >
              {day.date}
            </div>

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
            <Modal isOpen={isOpen} close={close} id={divIdClicked} info={props.info} />
          </div>
        );
      })}
    </>
  );
}
