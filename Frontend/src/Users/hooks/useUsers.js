import { useState, useCallback } from "react";
import { UseUserProvider } from "../providers/userProvider";
import { setTokenInLocalStorage, getUserFromToken } from "../services/localStorageService";
import { removeTokenFromLocalStorage } from "../services/localStorageService";
import {
  login,
  signUp,
  getAllUsers,
  deleteUser,
  passwordUpdate,
  updateUser,
} from "../services/userApiService";
import { useNavigate } from "react-router-dom";
import { userNormalization } from "../utils/userNormalization";
import { useSnackBarProvider } from "../../providers/SnackBarProvider";
import useAxios from "../../hooks/useAxios";

const useUsers = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { user, setUser, setToken } = UseUserProvider();
  const snackBar = useSnackBarProvider();

  const requestStatus = useCallback(
    (users, user, loading, error) => {
      setUsers(users), setUser(user), setLoading(loading), setError(error);
    },
    [setUser]
  );

  useAxios();

  const handelLogin = useCallback(
    async (user) => {
      try {
        const userData = await login(user);
        setTokenInLocalStorage(userData.token);
        setToken(userData.token);
        const loggedUser = getUserFromToken();
        requestStatus(null, loggedUser, false, null);
        navigate("/");
        snackBar("Welcome back!", "success");
      } catch (error) {
        requestStatus(null, null, false, error.message);
      }
    },
    [navigate, requestStatus, setToken, snackBar]
  );

  const handelLogout = useCallback(() => {
    removeTokenFromLocalStorage();
    setToken(null);
    setUser(null);
    navigate("/");
  }, [setToken, setUser, navigate]);

  const handelSignup = useCallback(
    async (user) => {
      try {
        const userNormalized = userNormalization(user);
        await signUp(userNormalized);
        await handelLogin({ email: user.email, password: user.password });
        snackBar("Account created successfully", "success");
      } catch (error) {
        requestStatus(null, false, error.message);
      }
    },
    [handelLogin, requestStatus, snackBar]
  );

  const handelGetAllUsers = useCallback(async () => {
    try {
      setLoading(true);
      const users = await getAllUsers();
      requestStatus(users, null, false, null);
    } catch (error) {
      requestStatus(null, false, error.message);
    }
  }, [requestStatus]);

  const handelDeleteUser = useCallback(
    async (id) => {
      try {
        setLoading(true);
        await deleteUser(id);
      } catch (error) {
        requestStatus(null, false, error.message);
      }
    },
    [requestStatus]
  );

  const handelPasswordUpdate = useCallback(
    async (password) => {
      try {
        setLoading(true);
        await passwordUpdate(password);
        snackBar("Password updated", "success");
      } catch (error) {
        requestStatus(null, false, error.message);
      }
    },
    [requestStatus, snackBar]
  );

  const handelUpdateUser = useCallback(
    async (user) => {
      try {
        setLoading(true);
        await updateUser(user);
        snackBar("User updated successful", "success");
      } catch (error) {
        requestStatus(null, false, error.message);
      }
    },
    [requestStatus, snackBar]
  );

  return {
    users,
    user,
    loading,
    error,
    handelLogin,
    handelLogout,
    handelSignup,
    handelGetAllUsers,
    handelDeleteUser,
    handelPasswordUpdate,
    handelUpdateUser,
  };
};

export default useUsers;
