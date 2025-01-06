import "../styles/modal.css";
import { motion } from "framer-motion";
import TimeConverter from "../utils/timeconverter";

export default function Modal(props) {
  if (!props.isOpen) return null;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="modal"
      >
        <div className="modal-content">
          <div className="modal-heading">
            <button
              className="exit-button"
              onClick={() => {
                props.close();
              }}
            >
              &times;
            </button>

            <h1 className="hourly-header">Hourly Weather</h1>
          </div>
          <div className="hourly-container">
            {props.info.forecastday
              .filter((day) => day.date_epoch == props.id)
              .map((day) => {
                return (
                  <>
                    {day.hour.map((hour, index) => {
                      return (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            border: "3px solid blue",
                            padding: "25px",
                            borderRadius: "25px",
                          }}
                        >
                          <h3>
                            {TimeConverter(
                              `${hour.time}:00-00:00`.substring(11, 19)
                            )}
                          </h3>
                          <img src={hour.condition.icon} />
                          <figcaption>{hour.condition.text}</figcaption>
                          <div>
                            <span>{hour.temp_f} &deg;F</span>
                          </div>
                          <div>Precipitation: {hour.chance_of_rain}%</div>
                        </div>
                      );
                    })}
                  </>
                );
              })}
          </div>
        </div>
      </motion.div>
    </>
  );
}
