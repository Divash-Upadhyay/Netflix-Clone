import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchToken } from "../../redux/auth/action";
import { store } from "../../redux/Store";
import "./login.scss";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const tokenn = useSelector((store) => store);
  console.log(tokenn);
  console.log(userData);
  const dispatch = useDispatch();
  const gotoHome = (e) => {
    e.preventDefault();
    dispatch(fetchToken(userData));
    navigate("/");
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form onSubmit={gotoHome}>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <button className="loginButton" type="submit">
            Sign In
          </button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
