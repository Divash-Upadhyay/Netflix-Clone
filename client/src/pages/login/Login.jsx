import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchToken } from "../../redux/auth/action";
import { loadData } from "../../redux/auth/localStorage";
import "./login.scss";
import Axios from "axios";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tokn = useSelector((store) => store.token.token);
  const token2 = loadData("token");
  const gotoHome = (e) => {
    e.preventDefault();
    console.log("Hello");
    dispatch(fetchToken(userData));
  };
  useEffect(() => {
    if (tokn !== null || token2 !== null) {
      navigate("/");
    }
  }, [tokn, token2]);

  const gotoSignUp = () => {
    navigate("/register");
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
        <form>
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
          <button className="loginButton" onClick={gotoHome}>
            Sign In
          </button>
          <span>
            New to Netflix? <b onClick={gotoSignUp}>Sign up now.</b>
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
