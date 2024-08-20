import React from "react";
import "./Controllers.scss";

function Controllers({ startClock, stopClock, clearClock }) {
  return (
    <div className="container__controllers">
      <button className="btn" onClick={() => startClock()}>
        Start
      </button>
      <button className="btn" onClick={() => stopClock()}>
        Stop
      </button>
      <button className="btn" onClick={() => clearClock()}>
        Clear
      </button>
    </div>
  );
}

export default Controllers;
