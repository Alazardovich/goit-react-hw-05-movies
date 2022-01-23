/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { fetchHomePage } from "../../utils/Api";
import { Link } from "react-router-dom";
const HomePage = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetchHomePage()
      .then((responce) => {
        setFilms(responce.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(films);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {films &&
          films.map((film) => {
            return (
              // eslint-disable-next-line jsx-a11y/alt-text
              <li key={film.id}>
                {/* <img src={film.poster_path} /> */}
                <Link to={`/movie/${film.id}`}>
                  {film.original_title ?? film.original_name}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default HomePage;
