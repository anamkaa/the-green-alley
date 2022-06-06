import React, { useState } from "react";
import { PlusCircle, MinusCircle } from "phosphor-react";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";

const Cartcardproduct = ({ product }) => {
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();
  const { wishlistDispatch } = useWishlist();
  const moveToWishlist = (product) => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: product });
    wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
  };

  return (
    <>
      <div className="gh-hr-card card card-image card-hr shadow gh-hr-card-res">
        <div className="card-image-container card-hr-image-container  hr-card-media">
          <img src={product.imgSrc} alt="flower" className="image image-md" />
        </div>

        <div className="gh-hr-card-content card-hr-content">
          <div className="card-content">
            <div className="gh-card-title card-image-content-title">
              {product.name}
            </div>
            <div className="gh-filter-wrap-row price-text">
              <del>{product.price}</del> &nbsp;
              <span>Rs.{product.discountPrice}</span> &nbsp;
              <span className="card-text-red">{product.off}</span>
            </div>
          </div>
          <div className="gh-filter-wrap-row">
            <PlusCircle
              size={32}
              className="gh-cart-icon"
              onClick={() => {
                cartDispatch({ type: "INCREASE_QTY", payload: product.id });
              }}
            />
            <span className="gh-badge">{product.qty}</span>
            <MinusCircle
              size={32}
              className="gh-cart-icon"
              onClick={() => {
                cartDispatch({ type: "DECREASE_QTY", payload: product.id });
              }}
            />
          </div>

          <div className="card-btn-container">
            <button
              className="card-btn gh-btn gh-btn-primary"
              onClick={() => {
                cartDispatch({ type: "REMOVE_FROM_CART", payload: product });
              }}
            >
              Remove from Cart
            </button>
            <button
              className="card-btn gh-btn gh-btn-secondary"
              onClick={() => moveToWishlist(product)}
            >
              Move to Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartcardproduct;
