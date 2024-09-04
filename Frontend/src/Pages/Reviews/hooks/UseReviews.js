import { useState } from "react";
import { getReviews, addReview, deleteReview } from "../Services/reviewsApiServices";
import { useSnackBarProvider } from "../../../providers/SnackBarProvider";
const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const snackBar = useSnackBarProvider();

  const handelGetReviews = async (tourId) => {
    try {
      setLoading(true); // Start loading indicator
      const { data } = await getReviews(tourId); // Destructure directly to get data
      setReviews(data); // Update status with fetched data
    } catch (error) {
      console.error("Failed to fetch reviews:", error); // Log error for debugging
    } finally {
      setLoading(false); // Always stop loading indicator
    }
  };

  const handelAddReview = async (tourId, review) => {
    try {
      setLoading(true);
      const { data } = await addReview(tourId, review);
      setReviews((prevReviews) => [...prevReviews, data]);
      snackBar("Review added successfully", "success");
    } catch (error) {
      console.error("Failed to add review:", error);
    } finally {
      setLoading(false);
    }
  };

  const handelDeleteReview = async (reviewId) => {
    try {
      setLoading(true);
      await deleteReview(reviewId);
      setReviews((prevReviews) => prevReviews.filter((review) => review._id !== reviewId));
      snackBar("Review deleted successfully", "success");
    } catch (error) {
      console.error("Failed to delete review:", error);
    } finally {
      setLoading(false);
    }
  };

  return { reviews, loading, handelGetReviews, handelAddReview, handelDeleteReview };
};

export default useReviews;
