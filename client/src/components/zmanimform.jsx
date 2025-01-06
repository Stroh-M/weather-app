import { useState } from "react";
import Button from "../components/submitbutton";
import Input from "./input";

export default function Zmanimform(props) {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  function changeHandler(e) {
    const { name, value } = e.target;
    name === "date" ? setDate(value) : null;
    name === "location" ? setLocation(value) : null;
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.submit(location, date);
          setDate("");
          setLocation("");
        }}
      >
        <Input
          type="text"
          name="location"
          change={changeHandler}
          value={location}
          placeholder="Enter location..."
        />
        <Input type="date" name="date" change={changeHandler} value={date}  />
        <Button text="Go" />
      </form>
    </>
  );
}
