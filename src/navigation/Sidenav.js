import React from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ExploreIcon from "@mui/icons-material/Explore";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuIcon from "@mui/icons-material/Menu";

function Sidenav() {
  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackey-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <div className="sidenav__button">
        <button className="side__button">
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className="side__button">
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className="side__button">
          <ExploreIcon />
          <span>Explore</span>
        </button>
        <button className="side__button">
          <SlideshowIcon />
          <span>Reels</span>
        </button>
        <button className="side__button">
          <ChatIcon />
          <span>Message</span>
        </button>
        <button className="side__button">
          <FavoriteBorderIcon />
          <span>Notification</span>
        </button>
        <button className="side__button">
          <AddCircleIcon />
          <span>Create</span>
        </button>
        <button className="side__button">
          <MenuIcon />
          <span>Menu</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
