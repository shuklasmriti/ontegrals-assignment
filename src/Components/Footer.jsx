import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
  <>
<div className="footer-body">
    <div className="footer-logo">
    <img
            src="https://select.finology.in/images/finology-select-logo-1.svg?v=dELi8hYLXwaOg0cl_iym1H5uGHoQGHadG3muzLgYQbo"
            alt="Logo"
          />
    </div>
<div className="footer-finology">
    <h2 className="animated-underline fino">Finology</h2>
<ul className='footer-ul'>
    <li>Finology one</li>
    <li>Recipe</li>
    <li>Quest</li>
    <li>Ticker</li>
    <li>Insider</li>
</ul>
</div>
<div className="footer-select">
<h2 className="animated-underline select">Select</h2>
<ul className='footer-ul'>
    <li>Brokers</li>
    <li>Compare</li>
    <li>Find My Broker</li>
    <li>Demat Account</li>
    <li>My Rewards</li>
</ul>
</div>
<div className="footer-help">
<h2 className="animated-underline help">
    Help
</h2>
<ul className='footer-ul'>
    <li>Methodology</li>
    <li>Stock-Market Glossary</li>
    <li>Credit-Card Glossary</li>
    <li>FAQs</li>
    <li>FAQs</li>
    {/* <li>Methodology</li> */}
</ul>

</div>
<div className="follow">
    <h2 className="animated-underline follow-us">Follow Us on</h2>
    <ul className='footer-ul'>
        <li style={{listStyleType:"none"}}><FaInstagram /> Instagram</li>
        <li style={{listStyleType:"none"}}><FaFacebookSquare /> Facebook</li>
        <li style={{listStyleType:"none"}}><FaSquareXTwitter /> Twitter</li>
        <li style={{listStyleType:"none"}}><FaLinkedin /> LinkedIn</li>
        <li style={{listStyleType:"none"}}><SiGmail /> Mail</li>
    </ul>
</div>
</div>
  </>
  )
}

export default Footer