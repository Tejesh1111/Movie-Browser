import { useContext } from "react";

import { MovieContext } from "../context/MovieContext";

import MovieCard from "../components/MovieCard/MovieCard";

function Favorites() {

  const { favorites } = useContext(MovieContext);

  return (

    <div>

      <h1>Favorites</h1>

      <div className="movies-container">

        {favorites.map((movie) => (

          <MovieCard key={movie.id} movie={movie} />

        ))}

      </div>

    </div>
  );
}

export default Favorites;