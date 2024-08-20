import React, { useState, useEffect, useRef } from "react";
import "./Timer.scss";

function Timer({ value, id, children }) {
  const [currentValue, setCurrentValue] = useState(value);
  const [previousValue, setPreviousValue] = useState(value);
  // const previousValue = currentValue;
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const segmentOverlayRef = useRef(null);

  useEffect(() => {
    if (currentValue !== value) {
      setShouldAnimate((prev) => true);
      setPreviousValue((prev) => currentValue); // Set previous value before updating current
      setCurrentValue((prev) => value); // Update current value

      const overlayElement = segmentOverlayRef.current;
      if (overlayElement) {
        const finishAnimation = () => {
          setShouldAnimate(false);
        };
        setTimeout(() => {
          finishAnimation();
        }, 700);
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
              {shouldAnimate ? formattedPreviousValue : formattedCurrentValue}
            </div>
            <div
              className={
                shouldAnimate ? "segment-overlay flip" : "segment-overlay"
              }
              ref={segmentOverlayRef}
            >
              <div className="segment-overlay__top">
                {shouldAnimate ? formattedPreviousValue : formattedCurrentValue}
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
