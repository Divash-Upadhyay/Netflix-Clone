import React, { useEffect, useState } from "react";
import "./ListItem.scss";
import axios from "axios";
import { Link } from "react-router-dom";

function ListItem({ index, item }) {
  const [hover, setHover] = useState(false);
  const [movie, setMovie] = useState({});
  // console.log(movie);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/movies/find/" + item,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTYyOWNiYjlkMzY5YTFiNjgxNGJjYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTI1MTIwMCwiZXhwIjoxNjU5NjgzMjAwfQ.czUKyYWbU7kIflQQ-hg2zBddrPFfRpQLPvLHOrkcSd8",
            },
          }
        );
        setMovie(res.data);
        // console.log("data", res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
    // console.log("hello");
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listitem"
        style={{ left: hover && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src={movie.imgSm} alt="movie" />
        {hover && (
          <>
            <video
              src={movie.trailer}
              controlsList="nodownload"
              autoPlay={true}
              loop
            ></video>

            <div className="itemInfo">
              <div className="icons">
                <i class="fa-solid fa-play fa-md icon"></i>
                <i class="fa-solid fa-plus icon"></i>
                <i class="fa-solid fa-thumbs-up icon"></i>
                <i class="fa-solid fa-thumbs-down icon"></i>
              </div>
              <div className="itemInfo">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.genre}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default ListItem;
