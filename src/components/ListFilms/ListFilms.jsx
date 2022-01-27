import { Link, useLocation } from "react-router-dom";
const ListFilms = ({ movies }) => {
  const location = useLocation();
  console.log("ListFilms", location);
  return (
    <ul>
      {movies &&
        movies.map((movie) => (
          // eslint-disable-next-line jsx-a11y/alt-text
          <li key={movie.id}>
            {/* <img src={film.poster_path} /> */}
            <Link to={`/movie/${movie.id}`} state={{ from: location }}>
              {movie.original_title ?? movie.original_name}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default ListFilms;
