import Input from "../components/input";
import Button from "../components/submitbutton"
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
      <Button className={props.className} text="Go" />
    </form>
  );
}
