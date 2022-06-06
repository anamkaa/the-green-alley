import React from "react";
import { Link } from "react-router-dom";
import Cartcardamount from "../components/card/Cartcardamount";
import Cartcardproduct from "../components/card/Cartcardproduct";
import Navbar from "../components/navbar/Navbar";
import { useCart } from "../context/cart-context";

const Cartmanagement = () => {
  const {
    cartState: { cart },
  } = useCart();
  return (
    <>
      <Navbar />
      {cart.length ? (
        <div className="gh-cart-wrap">
          <div className="gh-card-wrap">
            {cart.map((item) => (
              <Cartcardproduct product={item} />
            ))}
          </div>
          <div className="gh-card-wrap">
            <Cartcardamount />
          </div>
        </div>
      ) : (
        <>
          <div className="text-center green-txt nav-head">
            Your Cart is Empty
          </div>
          <img
            src="https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png"
            alt="empty-cart"
            className="image image-sm image-round"
          />

          <div className="empty-cart-btn-container">
            <Link to="/">
              <button className="card-btn gh-btn gh-btn-primary">
                Go Home
              </button>
            </Link>

            <Link to="/wishlist">
              <button className="card-btn gh-btn gh-btn-primary">
                Browse Wishlist
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Cartmanagement;
