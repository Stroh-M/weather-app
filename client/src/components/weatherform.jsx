import Input from "../components/input";
import { useState } from "react";

export default function WeatherForm(props) {
  const [inputLocation, setInputLocation] = useState("");

  function changeHandler(e) {
    setInputLocation(e.target.value);
  }

  return (
    <form
      className="weather-form"
      onSubmit={(e) => {
        e.preventDefault();
        props.submit(inputLocation);
        setInputLocation("");
      }}
    >
      <Input
        change={changeHandler}
        type="text"
        name="location"
        value={inputLocation}
        placeholder="Enter zip code...."
      />
      <button type="submit" className={props.className}>Go</button>
    </form>
  );
}
