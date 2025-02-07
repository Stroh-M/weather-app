import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Form from "../components/form";
import "../styles/signuppage.css"

export default function Signuppage() {
  const navigate = useNavigate();

  async function submitHandler(username, password) {
    try {
      const result = await axios.post("http://localhost:5000/signup", {
        username: username,
        password: password,
      });
      navigate("/");
      console.log(result);
    } catch (err) {
      return 500;
    }
  }

  return (
    <>
      <div className="signup-page">
        <div className="signup-area">
        <h1 className="signup-title">Sign up</h1>
        <Form submit={submitHandler} buttonText="Sign Up" />
        <p>
          Already signed up?{" "}
          <span>
            <Link className="login-link" to="/login">Log In</Link>
          </span>
        </p>
        </div>
      </div>
    </>
  );
}
