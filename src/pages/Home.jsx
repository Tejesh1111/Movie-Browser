import { useEffect, useState } from "react";

import Navbar from "../components/Navbar/Navbar";

import MovieCard from "../components/MovieCard/MovieCard";

import SearchBar from "../components/SearchBar/SearchBar";

import SortDropdown from
"../components/SortDropdown/SortDropdown";

import CategoryFilter from
"../components/CategoryFilter/CategoryFilter";

import {
  getTrendingMovies,
  searchMovies,
} from "../services/movieApi";

import useDebounce from
"../hooks/useDebounce";

function Home() {

  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [sortOption, setSortOption] =
    useState("popularity");

  const [selectedCategory,
    setSelectedCategory] =
    useState("Home");

  const debouncedSearch =
    useDebounce(searchTerm, 500);

  useEffect(() => {

    async function fetchMovies() {

      if (debouncedSearch) {

        const data =
          await searchMovies(debouncedSearch);

        setMovies(data);

      }
      else {

        const data =
          await getTrendingMovies();

        setMovies(data);
      }
    }

    fetchMovies();

  }, [debouncedSearch]);

  const sortedMovies =
    [...movies].sort((a, b) => {

    switch(sortOption){

      case "ratingHigh":

        return b.vote_average
          - a.vote_average;

      case "ratingLow":

        return a.vote_average
          - b.vote_average;

      case "newest":

        return new Date(b.release_date)
          - new Date(a.release_date);

      case "oldest":

        return new Date(a.release_date)
          - new Date(b.release_date);

      case "titleAZ":

        return a.title.localeCompare(
          b.title
        );

      case "titleZA":

        return b.title.localeCompare(
          a.title
        );

      default:

        return b.popularity
          - a.popularity;
    }
  });

  const filteredMovies =
    sortedMovies.filter((movie) => {

    if(selectedCategory === "Home"){

      return true;
    }

    if(selectedCategory === "Trending"){

      return movie.popularity > 100;
    }

    if(selectedCategory === "Action"){

      return movie.genre_ids.includes(28);
    }

    if(selectedCategory === "Drama"){

      return movie.genre_ids.includes(18);
    }

    if(selectedCategory === "Horror"){

      return movie.genre_ids.includes(27);
    }

    if(selectedCategory === "Romance"){

      return movie.genre_ids.includes(10749);
    }

    if(selectedCategory === "Thriller"){

      return movie.genre_ids.includes(53);
    }

    return true;
  });

  return (

    <div>

      <Navbar />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={
          setSelectedCategory
        }
      />

      <SortDropdown
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      <div className="movies-container">

        {filteredMovies.map((movie) => (

          <MovieCard
            key={movie.id}
            movie={movie}
          />

        ))}

      </div>

    </div>
  );
}

export default Home;