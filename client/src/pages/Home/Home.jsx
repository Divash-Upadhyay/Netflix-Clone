import React, { useState } from "react";
import { useEffect } from "react";
import { Featured } from "../../Components/featured/Featured";

import { List } from "../../Components/list/list";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./Home.scss";
import axios from "axios";
import { useSelector } from "react-redux";
import { store } from "../../redux/Store";

export const Home = ({ type }) => {
  const [list, setList] = useState([]);
  const [genre, setGenre] = useState(null);
  const storeey = useSelector((store) => store);
  // console.log("hometoken", storeey);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `https://netflixbackend11.herokuapp.com/api/lists${
            type ? "?type=" + type : ""
          }${genre ? "&genre=" + genre : ""}`,
          {
            headers: {
              token: "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
        );
        // console.log(res.data);
        setList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomList();
    // console.log(list);
  }, [genre, type]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {list.map((list, i) => (
        <List key={i} list={list} />
      ))}

      {/* heelo */}
    </div>
  );
};
