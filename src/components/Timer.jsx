import React, { useState } from "react";
import "./Timer.scss";

function Timer({ value, id, children }) {
  const [timeValue, setTimeValue] = useState(() => {
    return value;
  });
  const [prevValue, setPrevValue] = useState(() => {
    return timeValue;
  });

  console.log(timeValue, prevValue);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  if (timeValue !== value) {
    setTimeValue(value);
    setShouldAnimate(true);
    document
      .getElementById(id)
      .querySelector(".segment-overlay")
      .addEventListener("animationend", finishAnimation);
  }

  function finishAnimation() {
    console.log("removed animation");
    setShouldAnimate(false);
    setPrevValue(timeValue);
    this.removeEventListener("animationend", finishAnimation);
  }

  const printTimeValue = timeValue > 9 ? timeValue : `0${timeValue}`;
  const printPrevValue = prevValue > 9 ? prevValue : `0${prevValue}`;

  return (
    <div className="time-section" id={id}>
      <div className="time-group">
        <div className="time-segment">
          <div className="segment-display">
            <div className="segment-display__top">{printTimeValue}</div>
            <div className="segment-display__bottom">{printPrevValue}</div>
            <div
              className={
                shouldAnimate ? "segment-overlay flip" : "segment-overlay"
              }
            >
              <div className="segment-overlay__top">{printPrevValue}</div>
              <div className="segment-overlay__bottom">{printTimeValue}</div>
            </div>
          </div>
        </div>
      </div>
      <p className="timer-tag">{children}</p>
    </div>
  );
}

export default Timer;
