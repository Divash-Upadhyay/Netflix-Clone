import React, { useState } from "react";
import displayRazorpay from "./paymentGateway";
import { Footerb } from "../../Components/scndfooter/Footerb";

import "./payment.scss";
import { useSelector } from "react-redux";
import { store } from "../../redux/Store";
import { useNavigate } from "react-router";
import { loadData } from "../../redux/auth/localStorage";
import { useEffect } from "react";

export const Payment = () => {
  let pay = loadData("payment") || false;

  const navigate = useNavigate();

  console.log(pay);

  // useEffect(() => {
  //   if (pay) {
  //     navigate("/login");
  //   }
  // }, []);

  const initialState = [
    { btnn: true },
    { btnn: true },
    { btnn: true },
    { btnn: true },
  ];

  const [price, setPrice] = useState(null);
  const [btn, setBtn] = useState(initialState);
  const store = useSelector((store) => store);
  console.log(store);

  const setBtnprice = (e, i) => {
    setPrice(e);

    const newname = btn.filter((en, index) => {
      return index == i
        ? { ...en, btnn: (en.btnn = false) }
        : { ...en, btnn: (en.btnn = true) };
    });
    setBtn(newname);
  };

  const gotoLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="mnrDiv">
        <div className="innDiv">
          <img
            style={{ marginLeft: "30px" }}
            height="40px"
            width="170px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <p style={{ marginRight: "30px" }}>Sign out</p>
        </div>
        <div className="sendDiv">
          <p>STEP 2 of 3</p>
          <h3 style={{ fontSize: "32px" }}>
            Choose the Plan that's right for you
          </h3>
          <span>
            <i class="fa-solid fa-check"></i>
          </span>
          <span>No Commitments ,cancel Anytime</span>
          <br />

          <span>
            <i class="fa-solid fa-check"></i>
          </span>
          <span>Everything on Netflix for low prices</span>
          <br />
          <span>
            <i class="fa-solid fa-check"></i>
          </span>
          <span>No ads and no extra fees ever</span>
          <br />
          <div className="flxdivv">
            <button
              className={btn[0].btnn ? "btnColor" : "mnClr"}
              onClick={() => setBtnprice(149, 0)}
            >
              Mobile
            </button>
            <button
              className={btn[1].btnn ? "btnColor" : "mnClr"}
              onClick={() => setBtnprice(199, 1)}
            >
              Basic
            </button>
            <button
              className={btn[2].btnn ? "btnColor" : "mnClr"}
              onClick={() => setBtnprice(499, 2)}
            >
              Standard
            </button>
            <button
              className={btn[3].btnn ? "btnColor" : "mnClr"}
              onClick={() => setBtnprice(649, 3)}
            >
              Premium
            </button>
          </div>

          <div className="paymentDiv">
            <div>Monthly Price</div>
            <div className="priceDiv">
              {" "}
              <div className={!btn[0].btnn && "pDiv"}>₹ 149</div>
              <div className={!btn[1].btnn && "pDiv"}>₹ 199</div>
              <div className={!btn[2].btnn && "pDiv"}>₹ 499</div>
              <div className={!btn[3].btnn && "pDiv"}>₹ 649</div>
            </div>
          </div>
          <hr />
          <div className="paymentDiv">
            <div>Video Quality</div>
            <div className="priceDiv">
              {" "}
              <div className={!btn[0].btnn && "pDiv"}>Good</div>
              <div className={!btn[1].btnn && "pDiv"}>Good</div>
              <div className={!btn[2].btnn && "pDiv"}>Better</div>
              <div className={!btn[3].btnn && "pDiv"}>Best</div>
            </div>
          </div>
          <hr />
          <div className="paymentDiv">
            <div>Resolution</div>
            <div className="priceDiv">
              {" "}
              <div className={!btn[0].btnn && "pDiv"}>480p</div>
              <div className={!btn[1].btnn && "pDiv"}>480p</div>
              <div className={!btn[2].btnn && "pDiv"}>1080p</div>
              <div className={!btn[3].btnn && "pDiv"}>4K+HDR</div>
            </div>
          </div>
          <hr />
          <div className="paymentDiv">
            <div>Devices to watch</div>
            <div className="priceDiv">
              {" "}
              <div className={!btn[0].btnn && "pDiv"}>
                <i class="fa-solid fa-mobile-screen-button fa-2x"></i>
              </div>
              <div className={!btn[1].btnn && "pDiv"}>
                <i class="fa-solid fa-mobile-screen-button fa-2x"></i>
              </div>
              <div className={!btn[2].btnn && "pDiv"}>
                <i class="fa-solid fa-mobile-screen-button fa-2x"></i>
              </div>
              <div className={!btn[3].btnn && "pDiv"}>
                <i class="fa-solid fa-mobile-screen-button fa-2x"></i>
              </div>
            </div>
          </div>
          <div className="paymentDiv">
            <div></div>
            <div className="priceDiv">
              {" "}
              <div className={!btn[0].btnn && "pDiv"}>
                <i class="fa-solid fa-tablet fa-2x"></i>
              </div>
              <div className={!btn[1].btnn && "pDiv"}>
                <i class="fa-solid fa-tablet fa-2x"></i>
              </div>
              <div className={!btn[2].btnn && "pDiv"}>
                <i class="fa-solid fa-tablet fa-2x"></i>
              </div>
              <div className={!btn[3].btnn && "pDiv"}>
                <i class="fa-solid fa-tablet fa-2x"></i>
              </div>
            </div>
          </div>
          <div className="paymentDiv">
            <div></div>
            <div className="priceDiv">
              {" "}
              <div style={{ visibility: "hidden" }}>
                <i class="fa-solid fa-desktop fa-2x"></i>
              </div>
              <div className={!btn[1].btnn && "pDiv"}>
                <i class="fa-solid fa-desktop fa-2x"></i>
              </div>
              <div className={!btn[2].btnn && "pDiv"}>
                <i class="fa-solid fa-desktop fa-2x"></i>
              </div>
              <div className={!btn[3].btnn && "pDiv"}>
                <i class="fa-solid fa-desktop fa-2x"></i>
              </div>
            </div>
          </div>
          <div className="paymentDiv">
            <div></div>
            <div className="priceDiv">
              {" "}
              <div style={{ visibility: "hidden" }}>
                <i class="fa-solid fa-desktop fa-2x"></i>
              </div>
              <div className={!btn[1].btnn && "pDiv"}>
                <i class="fa-solid fa-tv fa-2x"></i>
              </div>
              <div className={!btn[2].btnn && "pDiv"}>
                <i class="fa-solid fa-tv fa-2x"></i>
              </div>
              <div className={!btn[3].btnn && "pDiv"}>
                <i class="fa-solid fa-tv fa-2x"></i>
              </div>
            </div>
          </div>
          <br />
          <div>
            <p style={{ fontSize: "14px" }}>
              HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
              subject to your internet service and device capabilities. Not all
              content is available in all resolutions. See our Terms of Use for
              more details.
            </p>
            <p style={{ fontSize: "14px" }}>
              Only people who live with you may use your account. Watch on 4
              different devices at the same time with Premium, 2 with Standard,
              and 1 with Basic and Mobile.
            </p>
            {!pay ? (
              <div className="butn">
                <button onClick={() => displayRazorpay(price)}>Next</button>
              </div>
            ) : (
              <div className="butn">
                <button onClick={gotoLogin}>Goto Login</button>
              </div>
            )}
          </div>
        </div>
        <Footerb />
      </div>
    </>
  );
};
