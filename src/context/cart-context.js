import { createContext, useContext, useReducer } from "react";
import { cartReducerFunction } from "../reducer/cart-reducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducerFunction, {
    cart: [],
    actualAmount: 0,
    amountPayable: 0,
  });

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
