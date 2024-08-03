import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Header.css";

const Header = () => {
  const [showBrokers, setShowBrokers] = useState(false);
  const [showCreditCards, setShowCreditCards] = useState(false);
  const [showBullsEye, setShowBullsEye] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleCreditCards = () => {
    setShowCreditCards((prevState) => !prevState);
    setShowBrokers(false);
    setShowBullsEye(false);
  };

  const toggleBrokers = () => {
    setShowBrokers((prevState) => !prevState);
    setShowCreditCards(false);
    setShowBullsEye(false);
  };

  const toggleBullsEye = () => {
    setShowBullsEye((prevState) => !prevState);
    setShowBrokers(false);
    setShowCreditCards(false);
  };

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img
            src="https://select.finology.in/images/finology-select-logo-1.svg?v=dELi8hYLXwaOg0cl_iym1H5uGHoQGHadG3muzLgYQbo"
            alt="Logo"
          />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`navbar-menu ${showMenu ? "active" : ""}`}>
          <ul>
            <li>Home</li>
            <li onClick={toggleBrokers}>
              Brokers <IoMdArrowDropdown />
              {showBrokers && (
                <ul className="dropdown">
                  <li>Broker 1</li>
                  <li>Broker 2</li>
                  <li>Broker 3</li>
                </ul>
              )}
            </li>
            <li onClick={toggleCreditCards}>
              Credit Cards <span className="new">new</span><IoMdArrowDropdown />
              {showCreditCards && (
                <ul className="dropdown">
                  <li>Credit Card 1</li>
                  <li>Credit Card 2</li>
                  <li>Credit Card 3</li>
                </ul>
              )}
            </li>
            <li onClick={toggleBullsEye}>
              Bulls Eye <span className="new">new</span><IoMdArrowDropdown />
              {showBullsEye && (
                <ul className="dropdown">
                  <li>Bulls Eye 1</li>
                  <li>Bulls Eye 2</li>
                  <li>Bulls Eye 3</li>
                </ul>
              )}
            </li>
            <button className="account-button">
              <b>Account</b>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
