import React from "react";
import styled from "styled-components";
import palette from "../lib/style/palette";

const BASE_URL = "https://image.tmdb.org/t/p/original";

const ContentBlock = styled.div`
  height: 93vh;
  background-color: ${palette.contentBackground};

  .image-container {
    display: flex;
    flex-wrap: wrap;

    img {
      height: 300px;
    }
  }
`;

const Content = ({ movies, title, loading }) => {
  console.log(title);
  console.log(movies);
  return (
    <ContentBlock>
      <h1>{title}</h1>
      <div class="image-container">
        {loading ? (
          <h1>Loading ...</h1>
        ) : (
          movies.map((movie) => (
            <img
              src={`${BASE_URL}${movie.poster_path}`}
              alt="poster"
              key={movie.id}
            />
          ))
        )}
      </div>
    </ContentBlock>
  );
};

export default Content;
