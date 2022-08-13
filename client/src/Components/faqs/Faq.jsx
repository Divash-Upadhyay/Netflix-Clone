import React from "react";
import { useState } from "react";
import "./faq.scss";

export const Faq = () => {
  const [firstBox, setFirstBox] = useState(false);
  const [scndBox, setScndBox] = useState(false);
  const [thirdBox, setThirdBox] = useState(false);
  const [fourthBox, setFourthBox] = useState(false);
  const [fifthBox, setFifthBox] = useState(false);
  const [sixBox, setSixthBox] = useState(false);
  const [sevenBox, setSevenBox] = useState(false);

  const setBox = () => {
    !firstBox ? setFirstBox(true) : setFirstBox(false);
  };
  const setscBox = () => {
    !scndBox ? setScndBox(true) : setScndBox(false);
  };
  const setThBox = () => {
    !thirdBox ? setThirdBox(true) : setThirdBox(false);
  };
  const setFoBox = () => {
    !fourthBox ? setFourthBox(true) : setFourthBox(false);
  };
  const setFiBox = () => {
    !fifthBox ? setFifthBox(true) : setFifthBox(false);
  };
  const setsiBox = () => {
    !sixBox ? setSixthBox(true) : setSixthBox(false);
  };

  return (
    <div className="mainDiv">
      <br />
      <br />
      <h1>Frequently Asked Questions</h1>
      <div className="inDiv">
        <div className="flexBox">
          <p>What is Netflix</p>
          <i onClick={setBox} class="fa-solid fa-plus"></i>
        </div>

        {firstBox && (
          <div className="innerDiv">
            <p>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want, without a single ad – all for one low
              monthly price. There's always something new to discover, and new
              TV shows and movies are added every week!
            </p>
          </div>
        )}
      </div>
      <div className="inDiv">
        <div className="flexBox">
          <p>How Much does Netflix cost</p>
          <i onClick={setscBox} class="fa-solid fa-plus"></i>
        </div>
        {scndBox && (
          <div className="innerDiv">
            <p>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
            </p>
          </div>
        )}
      </div>
      <div className="inDiv">
        <div className="flexBox">
          <p>Where can i Watch</p>
          <i onClick={setThBox} class="fa-solid fa-plus"></i>
        </div>
        {thirdBox && (
          <div className="innerDiv">
            <p>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. You can also download your
              favourite shows with the iOS, Android, or Windows 10 app. Use
              downloads to watch while you're on the go and without an internet
              connection. Take Netflix with you anywhere.
            </p>
          </div>
        )}
      </div>
      <div className="inDiv">
        <div className="flexBox">
          <p>How do i cancel?</p>
          <i onClick={setFoBox} class="fa-solid fa-plus"></i>
        </div>
        {fourthBox && (
          <div className="innerDiv">
            {" "}
            <p>
              Netflix is flexible. There are no annoying contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </p>
          </div>
        )}
      </div>
      <div className="inDiv">
        <div className="flexBox">
          <p>What can i watch on Netflix</p>
          <i onClick={setFiBox} class="fa-solid fa-plus"></i>
        </div>
        {fifthBox && (
          <div className="innerDiv">
            <p>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </p>
          </div>
        )}
      </div>
      <div className="inDiv">
        <div className="flexBox">
          <p>Is Netflix safe for Kids</p>
          <i onClick={setsiBox} class="fa-solid fa-plus"></i>
        </div>
        {sixBox && (
          <div className="innerDiv">
            <p>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              films in their own space. Kids profiles come with PIN-protected
              parental controls that let you restrict the maturity rating of
              content kids can watch and block specific titles you don’t want
              kids to see.
            </p>
          </div>
        )}
      </div>
      <div className="spantag">
        <span>
          Ready to watch? Enter your email to create or restart your membership.
        </span>
        <i class="fa-solid fa-arrow-up"></i>
      </div>
    </div>
  );
};
