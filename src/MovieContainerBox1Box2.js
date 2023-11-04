import React from "react";
import loaderimg from "./images/loading-55.gif";
import MoviewBox2List from "./MoviewBox2List";
import { MoviewBox1List } from "./MoviewBox1List";
import MovieDetails from "./MovieDetails";

export function MovieContainerBox1Box2({
  SeelectedId,
  loader,
  movieList,
  error,
  handleSelectMovie,
  handleCloseMovie,
  handleAddWatched,
  Watched,
  handleDeleteWatched,
}) {
  return (
    <div className="MovieContainerBox1_Box_2 main">
      <div className="MoviewListBox1">
        {!loader && !error && (
          <div>
            {movieList.map((movies) => {
              return (
                <MoviewBox1List
                  key={movies.imdbID}
                  movies={movies}
                  handleSelectMovie={handleSelectMovie}
                ></MoviewBox1List>
              );
            })}
          </div>
        )}
        {loader && <img className="loader" src={loaderimg} alt="p" />}
        {error && <p className="loader">{error}</p>}
      </div>
      <div className="MoviewListBox2">
        {SeelectedId ? (
          <MovieDetails
            SeelectedId={SeelectedId}
            handleCloseMovie={handleCloseMovie}
            handleAddWatched={handleAddWatched}
            Watched={Watched}
          ></MovieDetails>
        ) : (
          <MoviewBox2List
            Watched={Watched}
            handleDeleteWatched={handleDeleteWatched}
          ></MoviewBox2List>
        )}
      </div>
    </div>
  );
}
