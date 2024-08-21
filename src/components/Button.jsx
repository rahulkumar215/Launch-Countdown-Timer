import React from "react";
import "./Button.scss";

function Button({ onClick, disabled, children, className = "" }) {
  return (
    <button
      className={`btn ${className}`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
