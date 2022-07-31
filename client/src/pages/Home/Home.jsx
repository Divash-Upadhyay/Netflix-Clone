import React, { useState } from "react";
import { useEffect } from "react";
import { Featured } from "../../Components/featured/Featured";

import { List } from "../../Components/list/list";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./Home.scss";
import axios from "axios";

export const Home = ({ type }) => {
  const [list, setList] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTYyOWNiYjlkMzY5YTFiNjgxNGJjYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTI1MTIwMCwiZXhwIjoxNjU5NjgzMjAwfQ.czUKyYWbU7kIflQQ-hg2zBddrPFfRpQLPvLHOrkcSd8",
            },
          }
        );
        console.log(res.data);
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
      {list.map((list) => (
        <List list={list} />
      ))}

      {/* heelo */}
    </div>
  );
};
