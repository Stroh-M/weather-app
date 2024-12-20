import { useState } from "react";
import Input from "./input";
import "../styles/form.css";

export default function Form(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  function changeHandler(e) {
    const { value, name } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const result = await props.submit(username, password);
        setError(result);
        setPassword("");
        setUsername("");
      }}
    >
      <Input
        change={changeHandler}
        type="text"
        name="username"
        value={username}
        placeholder="Username"
      />
      <Input
        change={changeHandler}
        type="password"
        name="password"
        value={password}
        placeholder="Password"
      />
      {error === 500 && <aside>Username already exists, Please try logging in</aside>}

      {error === 401 && <aside>username or password incorrect</aside>}
      <button type="submit">{props.buttonText}</button>
    </form>
  );
}
