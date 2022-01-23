import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../utils/Api";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetchReviews(movieId)
      .then((response) => setReviews(response.results))
      .catch((error) => console.log(error));
  }, [movieId]);

  return (
    <article>
      {reviews && reviews.length !== 0 ? (
        reviews.map((review) => {
          return (
            <div key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </div>
          );
        })
      ) : (
        <h3>Not Reviews</h3>
      )}
    </article>
  );
};

export default Reviews;
