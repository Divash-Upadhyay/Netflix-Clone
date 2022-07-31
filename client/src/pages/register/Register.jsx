import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchAuth } from "../../redux/auth/action";
import "./Register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  console.log(email, password, username);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = useSelector((store) => store.token.isSignUp);
  console.log(signup);

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  const handleStart = (e) => {
    e.preventDefault();
    setEmail(emailRef.current.value);
  };
  const handleName = (e) => {
    e.preventDefault();
    setUsername(nameRef.current.value);
  };
  const handleFinish = (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    dispatch(fetchAuth(email, password, username));
  };
  if (signup) {
    navigate("/login");
  }
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : email && !username ? (
          <form className="input">
            <input type="text" placeholder="Enter UserName" ref={nameRef} />
            <button className="registerButton" onClick={handleName}>
              Start
            </button>
          </form>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
