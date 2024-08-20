import React, { useState } from "react";
import "./TimerContainer.scss";
import Clock from "./Clock";
import Controllers from "./Controllers";

function TimerContainer() {
  const [targetDate, setTargetDate] = useState(
    new Date().setDate(new Date().getDate() + 9)
  );
  const [runClock, setRunClock] = useState(false);

  function startClock() {
    setRunClock(true);
  }

  function stopClock() {
    setRunClock(false);
  }

  function clearClock() {
    setTargetDate(new Date().setDate(new Date().getDate()) - 1);
    stopClock();
    startClock();
  }

  return (
    <div className="container__timer">
      <h1>WE'RE LAUNCHING SOON</h1>
      <Clock runClock={runClock} targetDate={targetDate} />
      <Controllers
        startClock={startClock}
        stopClock={stopClock}
        clearClock={clearClock}
      />
    </div>
  );
}

export default TimerContainer;
