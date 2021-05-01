import React from "react";
import { AiFillStar, AiFillFire } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";

export const sidebarData = [
  {
    title: "Popular",
    path: "/popular",
    icon: <AiFillFire />,
  },
  {
    title: "Top Rated",
    path: "/top-rated",
    icon: <FiThumbsUp />,
  },
  {
    title: "Upcoming",
    path: "/upcoming",
    icon: <AiFillStar />,
  },
];
