import React, { useEffect, useRef } from "react";
import { draggable } from "../lib/draggable";
import "./Content.scss";
const BASE_URL = "https://image.tmdb.org/t/p/original";

const Content = ({ movies, title, loading }) => {
  const ref = useRef(null);
  useEffect(() => {
    draggable(ref);
  }, []);
  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <div className="wrapper" ref={ref}>
        {loading ? (
          <h1>Loading ...</h1>
        ) : (
          movies.map((movie) => (
            <img
              className="img-card"
              draggable="false"
              src={`${BASE_URL}${movie.poster_path}`}
              alt="poster"
              key={movie.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Content;
