import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getToken } from "../services/localStorageService";
import { getUserFromToken } from "../services/localStorageService";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => {
    const tokenFromLocalStorage = getToken();
    if (tokenFromLocalStorage) {
      const userFromToken = getUserFromToken(tokenFromLocalStorage);
      setUser(userFromToken);
    }
    return tokenFromLocalStorage;
  });

  useEffect(() => {
    if (!user) {
      const userFromLocalStorage = getToken();
      setUser(userFromLocalStorage);
    }
  }, [user]);

  const values = {
    user,
    setUser,
    token,
    setToken,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const UseUserProvider = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserProvider must be used within a UserProvider");
  }
  return context;
};
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
