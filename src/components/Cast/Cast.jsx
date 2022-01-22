/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCasts } from "../../utils/Api";

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
    <div>
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
              <ul>
                <li>{actor.name}</li>
              </ul>
              <p>{actor.character}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Cast;
