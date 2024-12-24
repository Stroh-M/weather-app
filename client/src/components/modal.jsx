import "../styles/modal.css";

export default function Modal(props) {
  if (!props.isOpen) return null;
  return (
    <>
      <div className="modal">
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
                    {day.hour.map((hour) => {
                      return (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            border: "3px solid blue",
                            padding: "5px",
                            borderRadius: "5px"
                          }}
                        >
                          <h3>{hour.time}</h3>
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
      </div>
    </>
  );
}
