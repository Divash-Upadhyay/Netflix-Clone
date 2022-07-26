import React, { useRef, useState } from "react";
import ListItem from "../lisitem/ListItem";
import "./List.scss";

export const List = ({ list }) => {
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
    // console.log(distance);
    // console.log("hello");
  };
  // console.log(list);
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <div className="inDiv lft">
          <i
            className="fa-solid fa-circle-arrow-left fa-xl sliderArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !moved && "none" }}
          ></i>
        </div>
        <div className="container" ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem index={i} item={item} />
          ))}
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
