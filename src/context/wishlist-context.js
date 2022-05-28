import { createContext, useContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({children}) => {

    const [wishlist,setWishlist] = useState(0);

    const addToWishlist = () => {
        setWishlist((wishlist)=>wishlist+1);
    }

    return (
        <WishlistContext.Provider value={{wishlist,addToWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => useContext(WishlistContext);