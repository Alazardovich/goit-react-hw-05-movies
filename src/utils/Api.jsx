const BASE_URL = "https://api.themoviedb.org/3";
const key = "a4de87479d087ab06b31a45a7a77ca83";
// const API = `${url}?api_key=${key}&${param}`;

async function Fetch(url = "", params = {}) {
  const response = await fetch(url, params);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchHomePage() {
  return Fetch(`${BASE_URL}/trending/all/day?api_key=${key}`);
}

export function fetchMoviePage(query) {
  return Fetch(
    `${BASE_URL}/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
  );
}
export function fetchMovieId(movieId) {
  return Fetch(`${BASE_URL}/movie/${movieId}?api_key=${key}&language=en-US`);
}
export function fetchCasts(movieId) {
  return Fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${key}&language=en-US`
  );
}
export function fetchReviews(movieId) {
  return Fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${key}&language=en-US`
  );
}
