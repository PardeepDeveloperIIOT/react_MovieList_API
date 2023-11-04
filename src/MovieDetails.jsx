import React, { useEffect, useState } from "react";
import loaderimg from "./images/loading-55.gif";

const mykey = "9da17e8b";
function MovieDetails({
  SeelectedId,
  handleCloseMovie,
  handleAddWatched,
  Watched,
}) {
  const [movieDetails, setMovieDetails] = useState({});
  const [newLoading, setnewLoading] = useState(false);
  const [myRating, setMyrating] = useState(0);

  const isWached = Watched.map((movies) => movies.imdbID).includes(SeelectedId);
  const previousRating = Watched.find(
    (e) => e.imdbID === SeelectedId
  )?.myRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: realeased,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movieDetails;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: SeelectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ")[0]),
      myRating: Number(myRating),
    };
    handleAddWatched(newWatchedMovie);
  }

  useEffect(
    function () {
      async function getMoviesSetails() {
        try {
          setnewLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${mykey}&i=${SeelectedId}`
          );
          const data = await res.json();
          setMovieDetails(data);
          setnewLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
      getMoviesSetails();
    },
    [SeelectedId]
  );
  return (
    <React.Fragment>
      {!newLoading ? (
        <div>
          <div className="details-container">
            <div className="details-section">
              <button className="detailsbtn" onClick={handleCloseMovie}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <img src={poster} alt="p"></img>
              <div className="detailsOverview">
                <h3>{title}</h3>
                <p>
                  {realeased} - {runtime}
                </p>
                <p>{genre}</p>
                <p>✨ {imdbRating} Rating </p>
                <p>
                  Your Rating{" "}
                  <span>
                    <select
                      className="myRating"
                      value={myRating}
                      onChange={(e) => setMyrating(e.target.value)}
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>7</option>
                      <option value={9}>9</option>
                    </select>
                  </span>
                </p>
                {!isWached && myRating >= 1 && (
                  <button className="btn-addList" onClick={handleAdd}>
                    Add To List
                  </button>
                )}
                {isWached && <p>🌟 Your Rated this movie {previousRating}</p>}
              </div>
            </div>
          </div>
          <section className="details-text">
            <p>
              <em>{plot}</em>
            </p>
            <p>Actors {actors}</p>
            <p>Directed By {director}</p>
          </section>
        </div>
      ) : (
        <img className="loader" src={loaderimg} alt="p" />
      )}
    </React.Fragment>
  );
}

export default MovieDetails;
