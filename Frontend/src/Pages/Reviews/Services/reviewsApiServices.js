import axios from "axios";

const API_URL = "http://localhost:3000/api/v1";

export const getReviews = async (tourId) => {
  try {
    const response = await axios.get(`${API_URL}/tours/${tourId}/reviews`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addReview = async (tourId, review) => {
  try {
    const response = await axios.post(`${API_URL}/tours/${tourId}/reviews`, review);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteReview = async (reviewId) => {
  try {
    const response = await axios.delete(`${API_URL}/reviews/${reviewId}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
