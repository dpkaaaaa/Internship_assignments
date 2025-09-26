import React, { useReducer } from "react";
import { CartContext } from "../context/CartContext";

const initialState = {
  cartCount: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cartCount: state.cartCount + 1 };
    default:
      return state;
  }
}

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cartCount: state.cartCount,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
