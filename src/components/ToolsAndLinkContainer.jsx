import React from "react";
import "./ToolsAndLinkContainer.scss";
import { ReactComponent as InstaIcon } from "../assets/icon-instagram.svg";
import { ReactComponent as LinkedInIcon } from "../assets/icon-linkedin.svg";
import { ReactComponent as TwitterIcon } from "../assets/icon-twitter.svg";

function ToolsAndLinkContainer() {
  return (
    <div className="container__tools">
      <a
        href="https://www.instagram.com/_rahul_vishwakarma_07/"
        target="blank"
        className="link"
      >
        <InstaIcon className="icons" />
      </a>
      <a
        href="https://www.linkedin.com/in/rahul-kumar-70841116a/"
        target="blank"
        className="link"
      >
        <LinkedInIcon className="icons sp" />
      </a>
      <a href="https://x.com/Rahul_Kumar010" target="blank" className="link">
        <TwitterIcon className="icons sp" />
      </a>
    </div>
  );
}

export default ToolsAndLinkContainer;
