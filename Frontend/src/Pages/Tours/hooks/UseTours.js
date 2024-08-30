import { useState, useCallback, useMemo } from "react";
import { getTours, getTour, updateTour } from "../services/ToursApiServices";
import useAxios from "../../../hooks/useAxios";
import { createTour } from "../services/ToursApiServices";
import { normalizeCreateTour } from "../util/normalizeCreateTour";
import { useSnackBarProvider } from "../../../providers/SnackBarProvider";
import { deleteTour } from "../services/ToursApiServices";

const useTours = () => {
  const [tours, setTours] = useState(null);
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const snackBar = useSnackBarProvider();

  //pagination
  const [page, setPage] = useState(1);
  const [toursPerPage] = useState(8);

  useAxios();

  const requestStatus = (tours, tour, loading, error) => {
    setTours(tours), setTour(tour), setLoading(loading), setError(error);
  };

  const handelGetTours = useCallback(async () => {
    try {
      setLoading(true); // Start loading indicator
      const { data } = await getTours(); // Destructure directly to get data
      requestStatus(data, null, false, null); // Update status with fetched data
      return data; // Return the data for use in other parts of the app
    } catch (error) {
      requestStatus(null, null, false, error.message); // Handle errors
      console.error("Failed to fetch tours:", error); // Log error for debugging
      throw error; // Rethrow the error if needed by the calling function
    } finally {
      setLoading(false); // Always stop loading indicator
    }
  }, []);

  const handelGetTour = useCallback(async (id) => {
    try {
      setLoading(true);
      const { data } = await getTour(id);
      requestStatus(null, data, false, null);
      return data;
    } catch (error) {
      requestStatus(null, null, false, error.message);
      console.error("Failed to fetch tour:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const handelUpdateTour = useCallback(async (tour) => {
    try {
      setLoading(true);

      const { data } = await updateTour(tour._id, tour);
      snackBar("Tour updated successfully", "success");
      requestStatus(data, null, false, null);
    } catch (error) {
      requestStatus(null, null, false, error.message);
      console.error("Failed to update tour:", error);
      throw error;
    }
  }, []);

  const handelCreateTour = useCallback(async (tour) => {
    try {
      setLoading(true);
      const normalizedTour = normalizeCreateTour(tour);
      const { data } = await createTour(normalizedTour);
      snackBar("Tour added successfully", "success");
      requestStatus(data, null, false, null);
    } catch (error) {
      requestStatus(null, null, false, error.message);
      console.error("Failed to create tour:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const handelDeleteTour = useCallback(async (id) => {
    try {
      setLoading(true);
      const { data } = await deleteTour(id);
      snackBar("Tour deleted successfully", "success");
      requestStatus(data, null, false, null);
      return data;
    } catch (error) {
      requestStatus(null, null, false, error.message);
      console.error("Failed to delete tour:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const values = useMemo(() => ({ tours, tour, loading, error }), [tours, tour, loading, error]);

  return {
    handelGetTours,
    handelGetTour,
    handelCreateTour,
    handelUpdateTour,
    handelDeleteTour,
    values,
    page,
    setPage,
    toursPerPage,
  };
};

export default useTours;
