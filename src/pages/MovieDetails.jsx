import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getMovieDetails } from "../services/movieApi";

import "./MovieDetails.css";

function MovieDetails() {

  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {

    async function fetchMovie() {

      const data = await getMovieDetails(id);

      setMovie(data);
    }

    fetchMovie();

  }, [id]);

  if (!movie) {

    return <h1>Loading...</h1>;
  }

  const poster =
    `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  let status = "Average";

  if (movie.revenue > movie.budget * 2) {

    status = "Blockbuster";
  }
  else if (movie.revenue > movie.budget) {

    status = "Hit";
  }
  else {

    status = "Flop";
  }

  return (

    <div className="details-page">

      <div className="details-container">

        <div className="poster-section">

          <img
            src={poster}
            alt={movie.title}
          />

        </div>

        <div className="info-section">

          <h1>{movie.title}</h1>

          <p className="overview">

            {movie.overview}

          </p>

          <div className="movie-info">

            <p>
              ⭐ Rating:
              <span> {movie.vote_average.toFixed(1)}</span>
            </p>

            <p>
              💰 Budget:
              <span> ${movie.budget}</span>
            </p>

            <p>
              📈 Revenue:
              <span> ${movie.revenue}</span>
            </p>

            <p>
              🎬 Status:
              <span> {status}</span>
            </p>

            <p>
              📅 Release:
              <span> {movie.release_date}</span>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MovieDetails;