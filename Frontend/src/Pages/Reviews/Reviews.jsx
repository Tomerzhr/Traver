import { useEffect } from "react";
import PageTitle from "../../components/PageTitle";
import Review from "./components/Review";
import useReviews from "./hooks/UseReviews";
import { useParams } from "react-router-dom";

export default function Reviews() {
  const { tourId } = useParams();
  const { handelGetReviews, reviews } = useReviews();

  useEffect(() => {
    handelGetReviews(tourId);
  }, []);

  return (
    <>
      <PageTitle
        title="Reviews"
        topTitle="Tour Name"
        titlePartOne="Reviews for this tour"
        margin="50px 0px"
      />
      {!reviews.length && <h2>No reviews yet</h2>}
      {reviews.map((review) => (
        <Review
          key={review._id}
          userPhoto={`http://localhost:3000/img/users/${review.user.photo}`}
          userName={review.user._id}
          reviewText={review.review}
          rating={review.rating}
        />
      ))}
    </>
  );
}
