import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/users";

export const login = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/login`, user);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const signUp = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, user);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getUser = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const passwordUpdate = async (password) => {
  try {
    const response = await axios.patch(`${API_URL}/updateMyPassword`, password);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const updateUser = async (user) => {
  try {
    const response = await axios.patch(`${API_URL}/updateMe`, user);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
