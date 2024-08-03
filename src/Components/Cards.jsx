// Card.jsx
import React, { useState } from "react";
import "./Cards.css"; // Import the CSS file for styling

const Card = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="outer-card-body">
        <div className="card">
          <div className="card-header" onClick={toggleCard}>
            <div className="toggle">
              <span className="toggle-icon">{isOpen ? "-" : "+"}</span>
            </div>
            <span>{question}</span>
          </div>
          <div className={`card-body ${isOpen ? "open" : ""}`}>{answer}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
