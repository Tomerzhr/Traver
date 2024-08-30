import { createContext } from "react";
import { useContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const UserProgressContext = createContext();

export default function UserProgressProvider({ children }) {
  const [progress, setProgress] = useState("");

  function showCart() {
    setProgress("cart");
  }
  function hideCart() {
    setProgress("");
  }

  function showCheckout() {
    setProgress("checkout");
  }
  function hideCheckout() {
    setProgress("");
  }

  const contextValue = {
    progress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={contextValue}>{children}</UserProgressContext.Provider>
  );
}

export const useProgressProvider = () => {
  const context = useContext(UserProgressContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

UserProgressProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
