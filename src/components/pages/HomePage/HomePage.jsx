import ListFilms from "../../ListFilms/ListFilms";
import { useState, useEffect } from "react";
import { fetchHomePage } from "../../../utils/Api";

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

  return (
    <>
      <h1>Trending today</h1>
      <ListFilms movies={films} />
    </>
  );
};

export default HomePage;
