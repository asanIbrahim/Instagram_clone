import React from "react";
import "./Time.css";
import Suggesstions from "./Suggesstion";
import Post from "./post/Post";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline_posts">
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
      <div className="timeline__right">
        <Suggesstions/>
      </div>
    </div>
  );
}

export default Timeline;
