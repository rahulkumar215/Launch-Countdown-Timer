import React from "react";
import "./Controllers.scss";
import Button from "./Button";

function Controllers({ clockType, startClock, stopClock, clearClock }) {
  return (
    <div className="container__controllers">
      <Button onClick={startClock} disabled={!(clockType === "timer")}>
        Start
      </Button>

      <Button onClick={stopClock} disabled={!(clockType === "timer")}>
        Stop
      </Button>

      <Button onClick={clearClock} disabled={!(clockType === "timer")}>
        Clear
      </Button>
    </div>
  );
}

export default Controllers;
