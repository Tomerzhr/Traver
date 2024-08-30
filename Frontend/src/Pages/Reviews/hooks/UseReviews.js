import { useState } from "react";
import { getReviews } from "../Services/reviewsApiServices";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return { reviews, loading, handelGetReviews };
};

export default useReviews;
