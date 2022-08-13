import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Faq } from "../../Components/faqs/Faq";
import { Footer } from "../../Components/footer/Footer";
import { Image } from "../../Components/front/Image";
import { fetchAuth } from "../../redux/auth/action";
import { loadData } from "../../redux/auth/localStorage";
import "./Register.scss";

export default function Register() {
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [pages, setPages] = useState({
    page1: false,
    page2: false,
    page3: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup =
    loadData("isSignup") || useSelector((store) => store.token.isSignUp);

  const handleStart = (e) => {
    e.preventDefault();

    setPages({ ...pages, page1: true });
  };
  const handleName = (e) => {
    e.preventDefault();
    setPages({ ...pages, page2: true });
  };
  const handleFinish = (e) => {
    e.preventDefault();

    dispatch(fetchAuth(userData));
  };
  useEffect(() => {
    if (signup) {
      navigate("/plan");
    }
  }, [signup]);

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
        {!pages.page1 ? (
          <form className="input">
            <input
              type="email"
              placeholder="email address"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </form>
        ) : pages.page1 && !pages.page2 ? (
          <form className="input">
            <input
              type="text"
              name="username"
              placeholder="Enter UserName"
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
            <button className="registerButton" onClick={handleName}>
              Start
            </button>
          </form>
        ) : (
          <form className="input">
            <input
              type="password"
              placeholder="password"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
      <Image />
      <Faq />
      <Footer />
    </div>
  );
}
