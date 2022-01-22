import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../utils/Api";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();
  useEffect(() => {
    return fetchReviews(movieId)
      .then((response) => setReviews(response.results))
      .catch((error) => console.log(error));
  }, [movieId]);

  return (
    <>
      {reviews ? (
        reviews.map((review) => {
          return (
            <div key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </div>
          );
        })
      ) : (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" />
      )}
    </>
  );
};

export default Reviews;
