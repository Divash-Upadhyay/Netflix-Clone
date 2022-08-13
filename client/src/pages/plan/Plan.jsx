import React from "react";
import { useNavigate } from "react-router";
import { Footerb } from "../../Components/scndfooter/Footerb";
import "./plan.scss";

export const Plan = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/payment");
  };
  return (
    <div className="mnDiv">
      <div className="innDiv">
        <img
          style={{ marginLeft: "30px" }}
          height="40px"
          width="170px"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <p style={{ marginRight: "30px" }}>Sign out</p>
      </div>
      <div className="sndDiv">
        <i class="fa-solid fa-circle-check fa-3x "></i>
        <p>STEP 1 of 3</p>
        <h3 style={{ fontSize: "32px" }}>Choose your Plan</h3>
        <span>
          <i class="fa-solid fa-check"></i>
        </span>
        <span>No Commitments ,cancel Anytime</span>
        <br />
        <br />
        <span>
          <i class="fa-solid fa-check"></i>
        </span>
        <span>Everything on Netflix for low prices</span>
        <br />
        <br />
        <span>
          <i class="fa-solid fa-check"></i>
        </span>
        <span>No ads and no extra fees ever</span>
        <br />
        <br />
        <button className="inbtn" onClick={handleClick}>
          Next
        </button>
      </div>
      <Footerb />
    </div>
  );
};
