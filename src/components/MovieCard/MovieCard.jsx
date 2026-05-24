import "./MovieCard.css";

import { Link } from "react-router-dom";

function MovieCard({ movie }) {

  const imageUrl =
    `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (

    <Link
      to={`/movie/${movie.id}`}
      className="movie-link"
    >

      <div className="movie-card">

        <img
          src={imageUrl}
          alt={movie.title}
        />

        <div className="movie-rating">

          ⭐ {movie.vote_average.toFixed(1)}

        </div>

      </div>

    </Link>
  );
}

export default MovieCard;