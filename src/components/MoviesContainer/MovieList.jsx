import React from "react";
import MovieCart from "./MovieCart";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="p-2">
      <h1 className="text-3xl p-3 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide no-scrollbar">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCart key={movie.id} posterPath={movie?.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
