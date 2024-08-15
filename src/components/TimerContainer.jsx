import React from "react";
import "./TimerContainer.scss";
import Clock from "./Clock";

function TimerContainer() {
  return (
    <div className="container__timer">
      <h1>WE'RE LAUNCHING SOON</h1>
      <Clock />
    </div>
  );
}

export default TimerContainer;
