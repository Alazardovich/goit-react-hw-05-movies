import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { fetchMoviePage } from "../../utils/Api";
// import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';
const MoviesPage = () => {
  const [searchQuery, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  // useEffect(
  //   () =>
  //     fetchMoviePage(searchQuery).then((response) =>
  //       console.log(response.results)
  //     ),
  //   [searchQuery]
  // );
  // console.log(movies);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchQuery) {
      return;
    }
    if (searchQuery === "") {
      alert("Ввелите название");
    }
    fetchMoviePage(searchQuery).then((response) => setMovies(response.results));
  };
  const inputChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <div>
      MoviesPage
      <form onSubmit={handleSubmit}>
        <label>
          Movies
          <input
            value={searchQuery}
            autoComplete="off"
            autoFocus
            type="text"
            name="movie"
            onChange={inputChange}
          />
        </label>
        <button type="submit">Searh</button>
      </form>
      <ul>
        {movies &&
          movies.map((movie) => (
            // eslint-disable-next-line jsx-a11y/alt-text
            <li key={movie.id}>
              {/* <img src={film.poster_path} /> */}
              <Link to={`/movie/${movie.id}`}>
                {movie.original_title ?? movie.original_name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
MoviesPage.propTypes = {
  searchQuery: PropTypes.string 
}
export default MoviesPage;
