import React from "react";
import "./BrokerCards.css";
import { AiOutlineStock } from "react-icons/ai";
import { FaCreditCard } from "react-icons/fa";
const BrokerCards = () => {
  return (
    <>
      <div className="container">
      <div className="card-part">
            <div className="images">
          <img
            className="card-img1"
            src="https://select.finology.in/images/product-card.svg"
            alt=""
          />
          </div>
          <div className="content card-content">
            <div className="headings card-heading">
              <h3>Credit Cards that don’t rob.</h3>
            </div>
            <div className=" para card-para">
              Give spending a solid shubh-laabh boost. Live large without
              breaking bank. Select’s hand-picked credit cards are designed to
              make your pocket thank you. Take charge of your choice with Genie,
              expert insights, and best deals and offers. That way, you won’t
              have to sell your soul to pay back Credit Card Debt.
            </div>
          </div>
          <button className=" featured featured-card" ><FaCreditCard className="icon" />  Featured Card</button>
        </div>
        <div className="broker-part">
            <div className="images">
          <img
            className="broker-img1"
            src="https://select.finology.in/images/product-broker.svg"
            alt=""
          />
          </div>
          <div className=" content broker-content">
            <div className=" headings broker-heading">
              <h3>Brokers with no agenda.</h3>
            </div>
            <div className=" para broker-para">
              Take both bold and shubh-kadams into investing with India’s most
              exclusive Brokers. Yes, they suit your investing needs. No, they
              don’t charge more than they should. Compare and analyse top
              brokers with Select's no-nonsense data and features that ease it
              all for you.
            </div>
          </div>
          <button className="featured featured-broker"><AiOutlineStock className="icon" /> Featured Broker</button>

        </div>
     
      </div>
    </>
  );
};

export default BrokerCards;
