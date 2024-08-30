import { createContext } from "react";
import { useState, useContext } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const addItemToCart = (item) => {
    setCartItems((prevCartItem) => {
      const existingCartIndex = prevCartItem.findIndex((cartItem) => cartItem.id === item.id);

      if (existingCartIndex !== -1) {
        const updatedCartItems = [...prevCartItem];
        updatedCartItems[existingCartIndex] = {
          ...updatedCartItems[existingCartIndex],
          quantity: updatedCartItems[existingCartIndex].quantity + 1,
        };
        return updatedCartItems;
      }
      return [...prevCartItem, { ...item, quantity: 1 }];
    });
  };

  const removeItemFromCart = (id) => {
    setCartItems((prevCartItem) => {
      const existingCartItemIndex = prevCartItem.findIndex((cartItem) => cartItem.id === id);

      if (existingCartItemIndex !== -1) {
        const updatedCartItems = [...prevCartItem];
        updatedCartItems[existingCartItemIndex] = {
          ...updatedCartItems[existingCartItemIndex],
          quantity: updatedCartItems[existingCartItemIndex].quantity - 1,
        };
        if (updatedCartItems[existingCartItemIndex].quantity <= 0) {
          updatedCartItems.splice(existingCartItemIndex, 1);
        }
        return updatedCartItems;
      }
      return prevCartItem;
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const contextValue = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    totalItems,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}

export const useCartProvider = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
