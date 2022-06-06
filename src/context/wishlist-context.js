import { createContext, useContext, useReducer } from "react";
import { useCart } from "./cart-context";
import { wishlistReducerFunction } from "../reducer/wishlist-reducer";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const {
    cartState: { state },
    cartDispatch,
  } = useCart();

  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducerFunction,
    {
      wishlist: [],
    }
  );

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
