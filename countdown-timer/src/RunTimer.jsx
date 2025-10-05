import React from "react";

function RunTimer(props) {
  const {
    isPaused,
    hours,
    minuts,
    second,
    handleReset,
    handlePaused,
    handleResume,
  } = props;
  return (
    <div className="countdown-container">
      <div className="timer-container">
        <div className="timer">
          {hours < 10 ? `0${hours}` : hours}
          <span>:</span>
        </div>
        <div className="timer">
          {minuts < 10 ? `0${minuts}` : minuts}
          <span>:</span>
        </div>
        <div className="timer"> {second < 10 ? `0${second}` : second}</div>
      </div>
      <div className="action">
        <button onClick={handleReset}>Reset</button>
        {!isPaused ? (
          <button onClick={handlePaused}>Pause</button>
        ) : (
          <button onClick={handleResume}>Resume</button>
        )}
      </div>
    </div>
  );
}

export default RunTimer;
