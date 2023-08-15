import React, { useState } from "react";
import "./RandomNum.css";

function RandomNum() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);
  const [randomVal, setRandomVal] = useState(5);
  const giveRandomNum = () => {
    setRandomVal(
      Math.floor(Math.random() * (maxVal - minVal + 1) + parseInt(minVal))
    );
  };
  return (
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>
            Random Number: <span>{randomVal}</span>
          </p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min:</p>
            <input
              type="number"
              value={minVal}
              onChange={(e) => setMinVal(e.target.value)}
            />
          </div>
          <div>
            <p>Max:</p>
            <input
              type="number"
              value={maxVal}
              onChange={(e) => setMaxVal(e.target.value)}
            />
          </div>
        </div>
        <button onClick={giveRandomNum}>Get random number</button>
      </div>
    </div>
  );
}

export default RandomNum;
