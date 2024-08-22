import React from "react";
import { Avatar } from "@mui/material";
import "./Suggesstions.css";

function Suggesstions() {
  return (
    <div className="suggestions">
      <div className="suggestion_title">Suggesstion for you</div>
      <div className="suggestion_usernames">
        <div className="suggestion_username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Asan</span>
              <span className="realtion">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
        <div className="suggestion_username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Rizwan</span>
              <span className="realtion">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestion_username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>M</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Mohamed</span>
              <span className="realtion">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestion_username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>H</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Harshath</span>
              <span className="realtion">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follo</button>
        </div>
      </div>
    </div>
  );
}

export default Suggesstions;
