import React from "react";
import  BrokerCards from './BrokerCards';
import "./Slogan.css";
import FeaturedBrokersCards from './FeaturedBrokersCards';
const Slogan = () => {
  return (
    <>
    <div className="outer-body">
    <div className="back-ground">
      <div className="box">
        
        <div className="slogan-area">
          <h1 className="slogan-heading">
            Stand <span className="out">OUT</span>, Don’t blend in
          </h1>
          <p className="slogan-para">
            Transform your life with effortless research, smart data, and
            insightful comparisons with ease.{" "}
            <b>
              {" "}
              <i>#EmbraceYourLife</i>
            </b>
          </p>
        </div>
        <div className="main-img-area">
          <img
            className="main-img"
            src="https://select.finology.in/images/home-main.png"
            alt=""
          />
        </div>
        <div className="number-count">
          <div className="img-1">
            <img
              className="page-views"
              src="https://select.finology.in/images/home-text1.svg"
              alt=""
            />
            <p>Pageviews-monthly</p>
          </div>
          <div className="img-2">
            <img
              className="page-views"
              src="https://select.finology.in/images/home-text2.svg"
              alt=""
            />
            <p>Happy users</p>
          </div>
          <div className="img-3">
            <img
              className="page-views"
              src="https://select.finology.in/images/home-text3.svg"
              alt=""
            />
            <p>Total Broker Views</p>
          </div>
        </div>
        </div>
    </div>
<BrokerCards/>
<div class="feat-broker-heading">
  <h1 class="animated-underline">Featured Broker</h1>
</div>
<FeaturedBrokersCards/>
    </div>
    </>
  );
};

export default Slogan;
