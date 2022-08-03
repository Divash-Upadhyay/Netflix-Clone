import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutSucess } from "../../redux/auth/action";
import { clearData } from "../../redux/auth/localStorage";
import "./Navbar.scss";

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const handleLogout = () => {
    clearData("token");
    logoutSucess(dispatch);
    navigate("/login");
  };

  return (
    <div className={isScroll ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link">
            <span className="house">
              {" "}
              <i className="fas fa-house"></i>
            </span>
          </Link>
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>

          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            {" "}
            <span className="navbarmainLinks">Movies</span>
          </Link>

          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <i className="fa-solid fa-magnifying-glass icon"></i>
          <span>KID</span>
          <i className="fa-solid fa-bell icon"></i>
          <img
            src="https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80"
            alt=""
          />
          <div className="profile">
            <i className="fa-solid fa-circle-down icon"></i>
            <div className="options">
              <span>Settings</span>
              <span onClick={handleLogout}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
