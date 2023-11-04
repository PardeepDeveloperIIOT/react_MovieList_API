import React from "react";

export function MoviewBox1List({ movies, handleSelectMovie }) {
  return (
    <React.Fragment>
      <div
        onClick={() => handleSelectMovie(movies.imdbID)}
        className="MoviewList1"
        style={{ cursor: "pointer" }}
      >
        <img src={movies.Poster} alt="e" />
        <div>
          <h3>{movies.Title}</h3>
          <p>📅 {movies.Year}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
