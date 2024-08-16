import React from "react";
import "./Timer.scss";

function Timer({ value, children }) {
  return (
    <div className="time-section" id="seconds">
      <div className="time-group">
        <div className="time-segment">
          <div className="segment-display">
            <div className="segment-display__top">00</div>
            <div className="segment-display__bottom">00</div>
            <div className="segment-overlay">
              <div className="segment-overlay__top">00</div>
              <div className="segment-overlay__bottom">00</div>
            </div>
          </div>
        </div>
      </div>
      <p className="timer-tag">{children}</p>
    </div>
  );
}

export default Timer;
