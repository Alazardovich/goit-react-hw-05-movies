import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import ListFilms from "../../components/ListFilms/ListFilms";
import { fetchMoviePage } from "../../utils/Api";
import SearchForm from "../../components/SearchForm/SearchForm";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const sortQuery = new URLSearchParams(location.search).get("q") ?? "cat";

  // console.log(`sortQuery + ${Date.now()}`);
  useEffect(() => {
    // console.log(`render + ${Date.now()}`);
    if (!sortQuery) return;
    fetchMoviePage(sortQuery)
      .then((response) => setMovies(response.results))
      .catch((error) => console.log(error));
  }, [sortQuery]);

  const onLinkSearchUrl = (q) => {
    // console.log(`q+ ${Date.now()}`);
    navigate({ ...location, search: `q=${q}` });
  };

  return (
    <div>
      MoviesPage
      <SearchForm onLinkSearch={onLinkSearchUrl} />
      <ListFilms movies={movies} />
    </div>
  );
};
MoviesPage.propTypes = {
  searchQuery: PropTypes.string,
};
export default MoviesPage;
