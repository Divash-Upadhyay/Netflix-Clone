import React, { useState } from "react";
import "./ListItem.scss";

function ListItem({ index }) {
  const [hover, setHover] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div
      className="listitem"
      style={{ left: hover && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM7m8_4vE7vHIxDAbPklru9oxoJs7szyA-XA&usqp=CAU"
        alt=""
      />
      {hover && (
        <>
          <video src={trailer} autoPlay={true} loop></video>

          <div className="itemInfo">
            <div className="icons">
              <i class="fa-solid fa-play fa-md icon"></i>
              <i class="fa-solid fa-plus icon"></i>
              <i class="fa-solid fa-thumbs-up icon"></i>
              <i class="fa-solid fa-thumbs-down icon"></i>
            </div>
            <div className="itemInfo">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              eos aperiam nostrum ea blanditiis, vel perferendis suscipit,
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;
