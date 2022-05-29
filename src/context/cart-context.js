import { createContext, useContext, useState } from "react";

export const CartContext = createContext();


export const CartProvider = ({children}) => {
    const [items,setItems] = useState(0);
    const addToCart = () => {
       setItems((items)=>{
        if(items>=0) {
            return items+1
        }
       } );
    }
    
    return (
        <CartContext.Provider value={{items,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);