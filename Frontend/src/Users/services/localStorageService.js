import { jwtDecode } from "jwt-decode";
const TOKEN_KEY = "token";

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setTokenInLocalStorage = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getUserFromToken = () => {
  try {
    const user = localStorage.getItem(TOKEN_KEY);
    return jwtDecode(user);
  } catch (error) {
    return null;
  }
};
