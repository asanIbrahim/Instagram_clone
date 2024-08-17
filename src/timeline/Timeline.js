import React from "react";
import "./Time.css";
import Suggesstions from "./Suggesstion";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__left">Timeline</div>
      <div className="timeline__right">
        <Suggesstions/>
      </div>
    </div>
  );
}

export default Timeline;
