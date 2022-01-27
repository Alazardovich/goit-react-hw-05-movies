import BackButton from "../../components/BackButton/BackButton";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchMovieId } from "../../utils/Api";
import {
  Container,
  BlockImg,
  Genre,
  ContainerNav,
} from "./CSSMovieDetailsPage";
const MovieDetailsPage = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setLoading] = useState(false);
  console.log("MovieDetailsPage", location);
  useEffect(() => {
    // if (!movieId) {
    //   const newLocal = "Not found";
    //   return alert(newLocal);
    // }
    setLoading(true);
    fetchMovieId(movieId)
      .then(setMovie)
      .catch((err) => console.log(err));
    setLoading(false);
  }, [movieId]);
  // const showErrorId = !isLoading && !movie;

  return (
    <>
      <BackButton />
      {/* {showErrorId && <div>Not found</div>} */}
      {!isLoading && movie && (
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
              <Link to="cast" state={location.state}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={location.state}>
                Reviews
              </Link>
            </li>
          </ContainerNav>
          <Outlet />
        </>
      )}
    </>
  );
};
MovieDetailsPage.propTypes = {
  movieId: PropTypes.string,
};
export default MovieDetailsPage;
