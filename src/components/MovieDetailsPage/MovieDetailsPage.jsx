/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unreachable */
import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { fetchMovieId } from "../../utils/Api";
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(
    () => fetchMovieId(movieId).then((response) => setMovie(response)),
    [movieId]
  );

  return (
    <>
      <button>
        <Link to="/">MovieDetailsPage</Link>
      </button>
      {movie && (
        <>
          <div>
            <div>
              {" "}
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
                }
                alt={movie.original_title}
                width="200"
              />
            </div>
            <div>
              <h1>{movie.original_title}</h1>
              <h2>overview</h2>
              <p>{movie.overview ?? movie.title}</p>
              <h3>Genres</h3>
              <p>
                {movie &&
                  movie.genres.map(({ name, id }) => (
                    <span key={id}>{name}</span>
                  ))}
              </p>
            </div>
          </div>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
