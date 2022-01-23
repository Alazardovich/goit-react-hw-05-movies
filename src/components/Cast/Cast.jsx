/* eslint-disable jsx-a11y/alt-text */
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
        actors.map((actor) => {
          return (
            <div key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
                }
                alt={actor.name}
                width="80"
              />
              <List>
                <li>{actor.name}</li>
              </List>
              <p>{actor.character}</p>
            </div>
          );
        })}
    </Container>
  );
};

export default Cast;
