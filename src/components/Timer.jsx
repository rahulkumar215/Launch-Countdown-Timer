import React, { useState, useEffect, useRef } from "react";
import "./Timer.scss";

function Timer({ value, id, children }) {
  const [currentValue, setCurrentValue] = useState(value);
  const [previousValue, setPreviousValue] = useState(value);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const segmentOverlayRef = useRef(null);

  useEffect(() => {
    if (currentValue !== value) {
      setShouldAnimate(true);
      setPreviousValue(currentValue); // Set previous value before updating current
      setCurrentValue(value); // Update current value

      const overlayElement = segmentOverlayRef.current;
      if (overlayElement) {
        const finishAnimation = () => {
          setShouldAnimate(false);
          overlayElement.removeEventListener("animationend", finishAnimation);
        };
        overlayElement.addEventListener("animationend", finishAnimation);
      }
    }
  }, [value, currentValue]);

  const formattedCurrentValue =
    currentValue > 9 ? currentValue : `0${currentValue}`;
  const formattedPreviousValue =
    previousValue > 9 ? previousValue : `0${previousValue}`;

  return (
    <div className="time-section" id={id}>
      <div className="time-group">
        <div className="time-segment">
          <div
            className={
              shouldAnimate ? "segment-display flipping" : "segment-display"
            }
          >
            <div className="segment-display__top">{formattedCurrentValue}</div>
            <div className="segment-display__bottom">
              {formattedPreviousValue}
            </div>
            <div
              className={
                shouldAnimate ? "segment-overlay flip" : "segment-overlay"
              }
              ref={segmentOverlayRef}
            >
              <div className="segment-overlay__top">
                {formattedPreviousValue}
              </div>
              <div className="segment-overlay__bottom">
                {formattedCurrentValue}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="timer-tag">{children}</p>
    </div>
  );
}

export default Timer;
