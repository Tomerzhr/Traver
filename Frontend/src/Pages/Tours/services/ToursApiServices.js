import axios from "axios";

const API_URL = "http://localhost:3000/api/v1";

export const getTours = async () => {
  try {
    const response = await axios.get(`${API_URL}/tours`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getTour = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/tours/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createTour = async (tour) => {
  try {
    const response = await axios.post(`${API_URL}/tours`, tour);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateTour = async (id, tour) => {
  try {
    const response = await axios.patch(`${API_URL}/tours/${id}`, tour);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteTour = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/tours/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
