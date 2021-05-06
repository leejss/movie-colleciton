import React from "react";
import { Link } from "react-router-dom";
import "./TopNav.scss";

const TopNav = () => {
  return (
    <nav className="topnav">
      <Link to="/top-rated" className="topnav-link">
        TOP-RATED
      </Link>
      <Link to="/trending" className="topnav-link">
        TRENDING
      </Link>
      <Link to="/upcoming" className="topnav-link">
        UPCOMING
      </Link>
    </nav>
  );
};

export default TopNav;
