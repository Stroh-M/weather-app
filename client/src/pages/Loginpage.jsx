import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "../components/form";
import axios from "axios";
import useAuth from "../hooks/useAuth";

export default function Loginpage() {
  const navigate = useNavigate();
  async function submitHandler(username, password) {
    try {
      const result = await axios.post(
        "http://localhost:5000/login",
        { username: username, password: password },
        { withCredentials: true }
      );
      navigate("/");
      console.log(result.data);
    } catch (err) {
      return 401;
    }
  }

  return (
    <>
      <h1>Log In</h1>
      <Form submit={submitHandler} buttonText="Log In" />
      <p>
        Not signed up yet?{" "}
        <span>
          <Link to="/signup">Sign Up</Link>
        </span>
      </p>
    </>
  );
}
