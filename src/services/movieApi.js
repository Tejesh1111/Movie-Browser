const API_KEY = "611f09e65be3f9ede451ee99d9ce67e1";

const BASE_URL = "https://api.themoviedb.org/3";

export async function getTrendingMovies() {

  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );

  const data = await response.json();

  return data.results;
}

export async function searchMovies(query) {

  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );

  const data = await response.json();

  return data.results;
}

export async function getMovieDetails(id) {

  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );

  const data = await response.json();

  return data;
}


export async function getMovieTrailer(id) {

  const response = await fetch(
    `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
  );

  const data = await response.json();

  return data.results[0];
}