import { FiArrowLeft } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { fetchMovieId } from "../../utils/Api";
import {
  Button,
  Container,
  BlockImg,
  Genre,
  ContainerNav,
} from "./CSSMovieDetailsPage";
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(
    () => fetchMovieId(movieId).then((response) => setMovie(response)),
    [movieId]
  );
  // console.log(movieId);
  // console.log(movie);
  return (
    <>
      <Button>
        <FiArrowLeft style={{ marginRight: 4 }} />
        <Link to="/">Go home</Link>
      </Button>
      {movie && (
        <>
          <Container>
            <BlockImg>
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
            </BlockImg>
            <div>
              <h1>{movie.original_title}</h1>
              <h2>Overview</h2>
              <p>{movie.overview ?? movie.title}</p>
              <h3>Genres</h3>
              <p>
                {movie &&
                  movie.genres.map(({ name, id }) => (
                    <Genre key={id}>{name}</Genre>
                  ))}
              </p>
            </div>
          </Container>
          <p>Additional information</p>
          <ContainerNav>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ContainerNav>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
