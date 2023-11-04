import React, { useEffect, useState } from "react";
import { MovieContainerBox1Box2 } from "./MovieContainerBox1Box2";
import { Header } from "./Header";

const mykey = "9da17e8b";
export default function App() {
  const [search, setSearch] = useState("Horror");
  const [movie, setMovie] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, seterror] = useState("");
  const [SeelectedId, setSelectedId] = useState(null);
  const [Watched, setWatched] = useState([]);

  function handleSelectMovie(id) {
    setSelectedId(id);
  }
  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((Watched) => [...Watched, movie]);
    setSelectedId(null);
  }
  function handleDeleteWatched(id) {
    setWatched((Watched) => Watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(
    function () {
      async function myapi() {
        try {
          setLoader(true);
          seterror("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${mykey}&s=${search}`
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie not found...");

          setMovie(data.Search);
          seterror("");
        } catch (e) {
          console.log("error call-----------------");
          console.log(e.message);
          seterror(e.message);
        } finally {
          setLoader(false);
        }
      }

      if (search.length < 3) {
        setMovie([]);
        seterror("");
        return;
      }

      myapi();
    },
    [search]
  );

  return (
    <div>
      <Header movie={movie} setSearch={setSearch} search={search}></Header>
      <MovieContainerBox1Box2
        loader={loader}
        movieList={movie}
        error={error}
        SeelectedId={SeelectedId}
        handleSelectMovie={handleSelectMovie}
        handleCloseMovie={handleCloseMovie}
        handleAddWatched={handleAddWatched}
        Watched={Watched}
        handleDeleteWatched={handleDeleteWatched}
      />
      )
    </div>
  );
}

export function MoviewBox2List() {
  return <React.Fragment></React.Fragment>;
}
