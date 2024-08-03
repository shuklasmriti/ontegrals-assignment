import React from "react";
import "./Badge.css";
import { IoStarSharp } from "react-icons/io5";
const Badge = () => {
  return (
    <>
      <div className="brok-card">
        <div className="brok-card-img">
          <img
            src="https://s3.ap-south-1.amazonaws.com/finology-images/Select/fda16cce4a9e43fbbca296f860b5d199.jpg"
            alt=""
          />
        </div>
        <div className="brok-card-data">
          <div className="brok-card-row1">
            <div className="title">Grow</div>
            <div className="rattings"><IoStarSharp style={{color:"yellow",width: "50px", height: "50px" }} /><IoStarSharp style={{color:"yellow", width: "50px", height: "50px" }} /><IoStarSharp style={{color:"yellow", width: "50px", height: "50px" }} /></div>
           <div className="detail-button">
            <button className="full-detail">Full Detail</button>
          </div>
          </div>
          <div className="brok-card-row2">
            <div className="discount">Discount Broker</div>
            <div className="span-container">
            <span style={{ fontSize: "1.2rem", color: "white" }}>Equity</span>

            <span  style={{ fontSize: "1.2rem", color: "white" }} >Commodity</span>
            <span  style={{ fontSize: "1.2rem", color: "white" }}>Currency</span>
            <span  style={{ fontSize: "1.2rem", color: "white" }}>Options</span>
            <span  style={{ fontSize: "1.2rem", color: "white" }}>Features</span>

          </div></div>

          
        </div>
      </div>
    </>
  );
};

export default Badge;
