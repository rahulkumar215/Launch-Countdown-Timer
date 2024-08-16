import React, { useEffect, useState } from "react";
import "./Clock.scss";
import Timer from "./Timer";

function Clock() {
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 5);

  const [days, setDays] = useState(00);
  const [hours, setHours] = useState(00);
  const [minutes, setMinutes] = useState(00);
  const [seconds, setSeconds] = useState(00);

  function getTimeRemaining(targetDateTime) {
    const nowTime = Date.now();
    const complete = nowTime >= targetDateTime;

    if (complete) {
      return {
        complete,
        days: 00,
        seconds: 00,
        minutes: 00,
        hours: 00,
      };
    }

    const secondsRemaining = Math.floor((targetDateTime - nowTime) / 1000);
    const days = Math.floor(secondsRemaining / 60 / 60 / 24);
    const hours = Math.floor(secondsRemaining / 60 / 60);
    const minutes = Math.floor(secondsRemaining / 60) - hours * 60;
    const seconds = secondsRemaining % 60;

    return {
      complete,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function updateValue(setFunc, value) {
    setFunc((prev) => {
      if (prev !== value) {
        return value;
      } else {
        return prev;
      }
    });
  }

  function updateAllSegments() {
    const timeRemainingBits = getTimeRemaining(new Date(targetDate).getTime());

    updateValue(setDays, timeRemainingBits.days);
    updateValue(setHours, timeRemainingBits.hours);
    updateValue(setMinutes, timeRemainingBits.minutes);
    updateValue(setSeconds, timeRemainingBits.seconds);

    return timeRemainingBits.complete;
  }

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      const isComplete = updateAllSegments();

      if (isComplete) {
        clearInterval(countdownTimer);
      }
    }, 1000);
  }, []);

  return (
    <div className="container__clock">
      <Timer value={days}>DAYS</Timer>
      <Timer value={hours}>HOURS</Timer>
      <Timer value={minutes}>MINUTES</Timer>
      <Timer value={seconds}>SECONDS</Timer>
    </div>
  );
}

export default Clock;
