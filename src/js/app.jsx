import React, { useState, useEffect } from "react";
import "./style.css";

const DigitBox = ({ value }) => (
  <div className="digit-box">
    {value}
  </div>
);

function SecondsCounter() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const padded = String(seconds).padStart(6, "0").split("");

  return (
    <div className="counter-wrapper">
      <DigitBox value={<i className="fa-regular fa-clock"></i>} />
      {padded.map((digit, index) => (
        <DigitBox key={index} value={digit} />
      ))}
    </div>
  );
}

export default SecondsCounter;
