import { createContext, useState } from "react";

export const MovieContext = createContext();

function MovieProvider({ children }) {

  const [favorites, setFavorites] = useState([]);

  function addFavorite(movie) {

    setFavorites([...favorites, movie]);
  }

  return (

    <MovieContext.Provider
      value={{
        favorites,
        addFavorite,
      }}
    >

      {children}

    </MovieContext.Provider>
  );
}

export default MovieProvider;