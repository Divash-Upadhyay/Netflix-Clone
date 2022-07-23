import React from "react";
import { Featured } from "../Components/featured/Featured";
import { List } from "../Components/list/list";
import { Navbar } from "../Components/Navbar/Navbar";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie" />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};
