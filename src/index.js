import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CartProvider } from './context/cart-context';
import { WishlistProvider } from './context/wishlist-context';
import {CategoryProvider} from './context/category-context';
import { ProductProvider } from "./context/product-context";

// Call make Server
makeServer();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <CartProvider>
      <WishlistProvider>
        <CategoryProvider>
          <ProductProvider>
    <App />
    </ProductProvider>
    </CategoryProvider>
    </WishlistProvider>
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

