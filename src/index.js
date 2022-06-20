import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CartProvider } from "./context/cart-context";
import { WishlistProvider } from "./context/wishlist-context";
import { CategoryProvider } from "./context/category-context";
import { ProductProvider } from "./context/product-context";
import { FilterProvider } from "./context/filter-context";
import { AuthProvider } from "./context/auth-context";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <CategoryProvider>
              <ProductProvider>
                <FilterProvider>
                  <App />
                </FilterProvider>
              </ProductProvider>
            </CategoryProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
