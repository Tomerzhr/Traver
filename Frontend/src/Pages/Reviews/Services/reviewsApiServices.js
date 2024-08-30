import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/tours";

export const getReviews = async (tourId) => {
  try {
    const response = await axios.get(`${API_URL}/${tourId}/reviews`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
