import React from "react";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { Link, useNavigate } from "react-router-dom";
import { HeartStraight } from "phosphor-react";
import { useAuth } from "../../context/auth-context";

const Productcard = ({ product }) => {
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();

  const {
    user: { isLogged },
  } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div className="gh-card card card-image shadow">
        <div className="card-image-container">
          {/* <HeartStraight size={24}  className="ph-heart card-icon-heart gh-heart"/> */}
          <img
            src={product.imgSrc}
            alt="product-image"
            className="card-image image image-md"
          />
          <div className="card-rating">
            <span className="rating">{product.rating}</span>
            <i className="fas fa-star card-icon-star"></i> | {product.review}
          </div>
        </div>
        <div className="card-content ">
          <div className="gh-card-title card-image-content-title image">
            {product.name}
          </div>

          <div className="price-text">
            <del className="card-text-red">{product.price}</del>
            <span style={{ fontSize: "1.2rem" }}>
              Rs.{product.discountPrice}
            </span>
            <span>{product.off}</span>
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
              onClick={() =>
                isLogged
                  ? cartDispatch({ type: "ADD_TO_CART", payload: product })
                  : navigate("/login")
              }
              disabled={!product.inStock}
              style={{ opacity: !product.inStock && "0.5" }}
            >
              {product.inStock === true ? "Add to cart" : "out of stock"}
            </button>
          )}

          {wishlist.some((item) => item.id === product.id) ? (
            <Link to="/wishlist">
              <button className="card-btn gh-btn gh-btn-secondary">
                Go To Wishlist
              </button>
            </Link>
          ) : (
            <button
              className="card-btn gh-btn gh-btn-secondary"
              onClick={() =>
                isLogged
                  ? wishlistDispatch({
                      type: "ADD_TO_WISHLIST",
                      payload: product,
                    })
                  : navigate("/login")
              }
            >
              Wishlist
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Productcard;
