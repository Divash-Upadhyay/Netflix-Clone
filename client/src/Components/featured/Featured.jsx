import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./featured.scss";
import axios from "axios";
export const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState({});
  useEffect(() => {
    const getRandom = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/movies/random?type=${type}`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTYyOWNiYjlkMzY5YTFiNjgxNGJjYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTI1MTIwMCwiZXhwIjoxNjU5NjgzMjAwfQ.czUKyYWbU7kIflQQ-hg2zBddrPFfRpQLPvLHOrkcSd8",
            },
          }
        );
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandom();
  }, [type]);
  console.log("content", content);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="genre"></option>
            <option value="adventure">Adventure</option>
            <option value="comdey">Comedy</option>
            <option value="crime">Crime</option>
            <option value="action">Action</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="hello" />
      <div className="info">
        <img src={content.imgTitle} alt="title" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <i class="fa-solid fa-play">
              <span>Play</span>
            </i>
          </button>
          <button className="more">
            <i class="fa-solid fa-circle-info"></i>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};
