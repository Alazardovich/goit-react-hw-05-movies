/* eslint-disable jsx-a11y/alt-text */
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCasts } from "../../utils/Api";
import { Container, List } from "./CSSCast";

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState();
  useEffect(() => {
    return (
      fetchCasts(movieId)
        // .then(setActors)
        .then((response) => setActors(response.cast))
        .catch((error) => console.log(error))
    );
  }, [movieId]);
  return (
    <Container>
      {actors &&
        actors.map(({ id, profile_path, name, character }) => {
          return (
            <div key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
                }
                alt={name}
                width="80"
              />
              <List>
                <li>{name}</li>
              </List>
              <p>{character}</p>
            </div>
          );
        })}
    </Container>
  );
};
Cast.propTypes = {
  movieId: PropTypes.string,
};
export default Cast;
