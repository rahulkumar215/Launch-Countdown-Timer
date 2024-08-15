import React from "react";
import "./ToolsAndLinkContainer.scss";
import { ReactComponent as InstaIcon } from "../assets/icon-instagram.svg";
import { ReactComponent as LinkedInIcon } from "../assets/icon-linkedin.svg";
import { ReactComponent as TwitterIcon } from "../assets/icon-twitter.svg";

function ToolsAndLinkContainer() {
  return (
    <div className="container__tools">
      <InstaIcon className="icons" />
      <LinkedInIcon className="icons sp" />
      <TwitterIcon className="icons sp" />
    </div>
  );
}

export default ToolsAndLinkContainer;
