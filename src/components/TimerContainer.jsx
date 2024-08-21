import React, { useState } from "react";
import "./TimerContainer.scss";
import Clock from "./Clock";
import Controllers from "./Controllers";
import Button from "./Button";

function TimerContainer() {
  const [runClock, setRunClock] = useState(true);
  const [clockType, setClockType] = useState("countdown");
  const [timer, setTimer] = useState(0);

  function startClock() {
    setRunClock(true);
  }

  function stopClock() {
    setRunClock(false);
  }

  function swtichClock() {
    setClockType((prev) => (prev === "countdown" ? "timer" : "countdown"));
    setRunClock(true);
    setTimer((prev) => 0);
  }

  function clearClock() {
    setTimer((prev) => 0);

    if (runClock) {
      setTimeout(() => stopClock(), 1000);
    }

    if (!runClock) {
      startClock();
      setTimeout(() => stopClock(), 1000);
    }
  }

  return (
    <div className="container__timer">
      <h1>
        {clockType === "countdown"
          ? "WE'RE LAUNCHING SOON"
          : "COUNTING TILL END OF TIME"}
      </h1>
      <Clock
        runClock={runClock}
        stopClock={stopClock}
        clockType={clockType}
        timer={timer}
        updateTimer={(value) => setTimer(value)}
      />
      <Controllers
        clockType={clockType}
        startClock={startClock}
        stopClock={stopClock}
        clearClock={clearClock}
        runClock={runClock}
      />
      <Button
        className="grid-center"
        onClick={() => {
          swtichClock();
        }}
      >
        Swith To {clockType === "countdown" ? "Timer" : "Countdown"}
      </Button>
    </div>
  );
}

export default TimerContainer;
