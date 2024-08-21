import React, { useEffect, useState } from "react";
import "./Clock.scss";
import Timer from "./Timer";

function Clock({ runClock, stopClock, clockType, timer, updateTimer }) {
  const targetDate = new Date().setDate(new Date().getDate() + 9);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function getTimeRemaining(targetDateTime) {
    const nowTime = Date.now();
    const complete = nowTime >= targetDateTime;

    if (complete) {
      stopClock();
      return {
        complete,
        days: 0,
        seconds: 0,
        minutes: 0,
        hours: 0,
      };
    }
    const secondsRemaining = Math.floor((targetDateTime - nowTime) / 1000);
    const days = Math.floor(secondsRemaining / 60 / 60 / 24);
    const hours = Math.floor(secondsRemaining / 60 / 60) - days * 24;
    const minutes =
      Math.floor(secondsRemaining / 60) - hours * 60 - days * 24 * 60;
    const seconds = secondsRemaining % 60;

    console.log(days, hours, minutes, seconds);

    return {
      complete,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    function updateAllSegments() {
      const timeRemainingBits = getTimeRemaining(
        new Date(targetDate).getTime()
      );

      setDays(timeRemainingBits.days);
      setHours(timeRemainingBits.hours);
      setMinutes(timeRemainingBits.minutes);
      setSeconds(timeRemainingBits.seconds);

      return timeRemainingBits.complete;
    }

    if (clockType === "countdown" && runClock) {
      const countdownTimer = setInterval(() => {
        const isComplete = updateAllSegments();

        if (isComplete) {
          clearInterval(countdownTimer);
        }
      }, 1000);

      return () => clearInterval(countdownTimer);
    }

    if (clockType === "timer" && runClock) {
      const countdownTimer = setInterval(() => {
        setDays(Math.floor(timer / 60 / 60 / 24));
        setHours(Math.floor(timer / 60 / 60));
        setMinutes(Math.floor(timer / 60));
        setSeconds(Math.floor(timer % 60));

        updateTimer(timer + 1);
      }, 1000);

      return () => clearInterval(countdownTimer);
    }
  }, [runClock, clockType, timer]);

  return (
    <div className="container__clock">
      <Timer value={days} id="days">
        DAYS
      </Timer>
      <Timer value={hours} id="hours">
        HOURS
      </Timer>
      <Timer value={minutes} id="minutes">
        MINUTES
      </Timer>
      <Timer value={seconds} id="seconds">
        SECONDS
      </Timer>
    </div>
  );
}

export default Clock;
