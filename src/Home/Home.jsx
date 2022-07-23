import React from "react";
import { Featured } from "../Components/featured/Featured";
import { Navbar } from "../Components/Navbar/Navbar";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="Movie" />
    </div>
  );
};
