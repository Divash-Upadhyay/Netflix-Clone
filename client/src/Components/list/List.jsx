import React, { useRef, useState } from "react";
import ListItem from "../lisitem/ListItem";
import "./List.scss";

export const List = () => {
  const [slide, setSlide] = useState(0);
  const [moved, setIsMoved] = useState(false);
  const listRef = useRef();
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slide > 0) {
      setSlide(slide - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slide < 5) {
      setSlide(slide + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    console.log(distance);
    // console.log("hello");
  };
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <div className="inDiv lft">
          <i
            className="fa-solid fa-circle-arrow-left fa-xl sliderArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !moved && "none" }}
          ></i>
        </div>
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <div className="inDiv rght">
          <i
            className="fa-solid fa-circle-arrow-right rght fa-xl sliderArrow right"
            style={{ color: "white" }}
            onClick={() => handleClick("right")}
          ></i>
        </div>
      </div>
    </div>
  );
};
