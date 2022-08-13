import React from "react";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="mnrrDiv">
      <br />
      <br />
      <div className="inDiv">
        <p>Questions? Call 000-800-040-1843</p>
        <div className="flxDiv">
          <p>FAQ</p>
          <p>Help Centre</p>
          <p>Account</p>
          <p>Media Centre</p>
        </div>
        <div className="flxDiv">
          <p>Investor Relations</p>
          <p>Jobs</p>
          <p>Ways to Watch</p>
          <p>Terms of Use</p>
        </div>
        <div className="flxDiv">
          <p>Privacy</p>
          <p>Cookie Preferences</p>
          <p>Corporate Information</p>
          <p>Contact Us</p>
        </div>
        <div className="flxDiv">
          <p>Speed Test</p>
          <p>Legal Notices</p>
          <p>Only on Netflix</p>
          <p>Our Local services</p>
        </div>

        <select name="language" id="language">
          <i class="fa-solid fa-earth-africa"></i>
          <option value="">Language</option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>

        <p>Netflix India</p>
      </div>
    </div>
  );
};
