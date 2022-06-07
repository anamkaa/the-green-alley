import React from "react";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { Link } from "react-router-dom";

const Wishlistcard = ({ product }) => {
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();
  const { wishlistDispatch } = useWishlist();

  const moveToCart = (product) => {
    cartDispatch({ type: "ADD_TO_CART", payload: product });
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });
  };

  return (
    <>
      <div className="gh-card card card-image shadow">
        <i className="ph-x card-icon-dismiss gh-dismiss"></i>
        <div className="card-image-container">
          <img src={product.imgSrc} alt="card-image" className="card-image" />
          <div className="card-rating">
            <span className="rating">{product.rating}</span>
            <i className="fas fa-star card-icon-star"></i> | {product.review}
          </div>
        </div>
        <div className="card-content">
          <div className="gh-card-title card-image-content-title">
            {product.name}
          </div>
          <div className="gh-filter-wrap-row price-text">
            <span>Rs. {product.discountPrice}</span> &nbsp;
            <del>Rs. {product.price}</del> &nbsp;
            <span className="card-text-red">{product.off}</span>
          </div>
        </div>
        <div className="card-btn-container gh-btn-container">
          {cart.some((item) => item.id === product.id) ? (
            <Link to="/cartmanagement">
              <button className="card-btn gh-btn gh-btn-primary">
                Go To Cart
              </button>
            </Link>
          ) : (
            <button
              className="card-btn gh-btn gh-btn-primary"
              onClick={() => {
                moveToCart(product);
              }}
            >
              Move to Cart
            </button>
          )}

          <button
            className="card-btn gh-btn gh-btn-primary"
            onClick={() => {
              wishlistDispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: product,
              });
            }}
          >
            Remove From Wishlist
          </button>
        </div>
      </div>
    </>
  );
};

export default Wishlistcard;
