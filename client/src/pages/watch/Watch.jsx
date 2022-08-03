import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Watch.scss";

const Watch = () => {
  const location = useLocation();
  console.log(location.state.movie.video);
  return (
    <div className="watch">
      <Link to="/">
        {" "}
        <div className="back">
          <i class="fa-solid fa-arrow-left-long"></i>
          Home
        </div>
      </Link>

      <video
        className="video"
        autoPlay
        progress
        controls
        src={location.state.movie.video}
      ></video>
    </div>
  );
};

export default Watch;
