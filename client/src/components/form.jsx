import { useState } from "react";

export default function Form(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

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
      <p>{error === 500 ? "Username already exists, Please try logging in" : ""}</p>
      <p>{error === 401 ? "username or password incorrect" : ""}</p>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
        name="username"
        value={username}
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="text"
        name="password"
        value={password}
      />
      <button type="submit">{props.buttonText}</button>
    </form>
  );
}
