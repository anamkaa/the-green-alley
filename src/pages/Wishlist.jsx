import React from "react";
import Navbar from "../components/navbar/Navbar";
import Wishlistcard from "../components/card/Wishlistcard";
import { useWishlist } from "../context/wishlist-context";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const {
    wishlistState: { wishlist },
  } = useWishlist();

  return (
    <>
      <Navbar />

      {wishlist.length ? (
        <div className="gh-wishlist-wrap">
          {wishlist.map((item) => (
            <Wishlistcard key={item._id} product={item} />
          ))}
        </div>
      ) : (
        <>
          <div className="text-center green-txt nav-head">
            Your Wishlist is Empty
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-4yRgH2yXIDIbGaHcOt4dZlxGy1n0FN_FQ&usqp=CAU"
            alt="empty-wishlist"
            className="image image-sm image-square-round"
          />
          <Link to="/">
            <div className="empty-cart-btn-container">
              <button className="card-btn gh-btn gh-btn-primary">
                Go Home
              </button>
            </div>
          </Link>
        </>
      )}
    </>
  );
};

export default Wishlist;
