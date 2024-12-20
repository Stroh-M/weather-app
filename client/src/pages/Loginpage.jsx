import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "../components/form";
import axios from "axios";
import "../styles/loginpage.css";

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
      <div className="login-page">
        <div className="login-area">
          <h1 className="login-title">Log In</h1>
          <Form submit={submitHandler} buttonText="Log In" />
          <p>
            Not signed up yet?{" "}
            <span>
              <Link className="signup-link" to="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
