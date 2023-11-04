import React from "react";

function WatchedMovieList({ movie, handleDeleteWatched }) {
  console.log(movie);
  return (
    <React.Fragment>
      <div className="AddList-Container">
        <button
          onClick={() => handleDeleteWatched(movie.imdbID)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          ❌
        </button>
        <img src={movie.poster} alt="w"></img>
        <div className="addlist-items">
          <h3>{movie.title}</h3>
          <div className="AddList-deatils">
            <p>⭐ {movie.imdbRating}</p>
            <p>🌟 {movie.myRating}</p>
            <p>⌚ {movie.runtime} Min</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WatchedMovieList;
