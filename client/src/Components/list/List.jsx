import React, { useRef, useState } from "react";
import ListItem from "../lisitem/ListItem";
import "./List.scss";

export const List = ({ list }) => {
  const [slide, setSlide] = useState(0);
  const [moved, setIsMoved] = useState(false);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  const listRef = useRef();
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slide > 0) {
      setSlide(slide - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slide < 10 - clickLimit) {
      setSlide(slide + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

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
            <ListItem key={item._id} item={item} />
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
