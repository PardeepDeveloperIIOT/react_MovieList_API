import React from "react";
import WatchedMovieList from "./WatchedMovieList";
function MoviewBox2List({ Watched, handleDeleteWatched }) {
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(Watched.map((movie) => movie.imdbRating));
  const avgMyRating = average(Watched.map((movie) => movie.myRating));
  const avgRuntime = average(Watched.map((movie) => movie.runtime));

  return (
    <React.Fragment>
      <div className="Movie-watched-container">
        <div className="watched-movie-section">
          <h3>🎞️ Movies You Watched 🎬</h3>
          <div className="watched-movie-soverallDeatils">
            <p>🎬 {Watched.length} movies </p>
            <p>⭐ {avgImdbRating.toFixed(2)}</p>
            <p>🌟 {avgMyRating.toFixed(2)} </p>
            <p>⌚ {avgRuntime.toFixed(0)} min</p>
          </div>
        </div>
        {Watched.map((movie, index) => {
          return (
            <WatchedMovieList
              handleDeleteWatched={handleDeleteWatched}
              key={index}
              movie={movie}
            ></WatchedMovieList>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default MoviewBox2List;
