import React from "react";

function StartTimer({ handleOnChange, handleStart }) {
  return (
    <div className="input-countdown-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="HH"
          id="hours"
          onChange={handleOnChange}
        />
        <input
          type="text"
          placeholder="MM"
          id="minuts"
          onChange={handleOnChange}
        />
        <input
          type="text"
          placeholder="SS"
          id="second"
          onChange={handleOnChange}
        />
      </div>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}

export default StartTimer;
