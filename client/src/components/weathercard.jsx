export default function Weathercard(props) {
  return (
    <>
      <div>
        <h1>{props.location}</h1>
        <h2>{props.temp} &deg;F</h2>
        <img src={props.conditionIcon} alt={props.condition} />
        <p>{props.condition}</p>
      </div>
    </>
  );
}
