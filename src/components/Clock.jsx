import React from "react";
import "./Clock.scss";
import Timer from "./Timer";

function Clock() {
  return (
    <div className="container__clock">
      <Timer>DAYS</Timer>
      <Timer>HOURS</Timer>
      <Timer>MINUTES</Timer>
      <Timer>SECONDS</Timer>
    </div>
  );
}

export default Clock;
