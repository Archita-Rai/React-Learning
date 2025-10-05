import { use, useEffect } from "react";
import { useState } from "react";
import StartTimer from "./StartTimer";
import RunTimer from "./RunTimer";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [hours, setHours] = useState(0);
  const [minuts, setMinuts] = useState(0);
  const [second, setSecond] = useState(0);
  const [timerId, setTimerId] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleStart = () => {
    if (hours <= 0 && second <= 0 && minuts <= 0) {
      alert("Enter the valid time");
    } else {
      setIsStart(true);
    }
  };

  const resetValues = () => {
    setHours(0);
    setMinuts(0);
    setSecond(0);
  };

  const handlePaused = () => {
    setIsPaused(true);
    clearInterval(timerId);
  };
  const handleResume = () => {
    setIsPaused(false);
    runtimer(second, minuts, hours, timerId);
  };
  const handleReset = () => {
    setIsStart(false);
    resetValues();
  };

  const handleOnChange = (e) => {
    console.log(e.target.id, e.target.value);
    const value = Number(e.target.value);
    if (e.target.id == "hours") {
      setHours(value);
    }
    if (e.target.id == "minuts") {
      setMinuts(value);
    }
    {
      setSecond(value);
    }
  };

  const runtimer = (sec, min, hour, tid) => {
    if (sec > 0) {
      setSecond((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMinuts((m) => m - 1);
      setSecond(59);
    } else {
      setHours((h) => h - 1);
      setMinuts(59);
      setSecond(59);
    }

    if (sec == 0 && min == 0 && hour == 0) {
      alert("timer has been finished!");
      clearInterval(tid);
      handleReset();
    }
  };
  useEffect(() => {
    let tid;
    if (isStart == true) {
      tid = setInterval(() => {
        runtimer(second, minuts, hours, tid);
      }, 1000);
      setTimerId(tid);
    }
    return () => {
      clearInterval(tid);
    };
  }, [hours, minuts, second, isStart]);

  return (
    <>
      <div className="container">
        {!isStart && (
          <StartTimer
            handleOnChange={handleOnChange}
            handleStart={handleStart}
          />
        )}

        {isStart && (
          <RunTimer
            isPaused={isPaused}
            hours={hours}
            minuts={minuts}
            second={second}
            handleReset={handleReset}
            handlePaused={handlePaused}
            handleResume={handleResume}
          />
        )}
      </div>
    </>
  );
}

export default App;
