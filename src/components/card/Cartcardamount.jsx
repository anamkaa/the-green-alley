import React, { useState, useEffect } from "react";
import { useCart } from "../../context/cart-context";

const Cartcardamount = () => {
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();
  const [total, setTotal] = useState(0);
  const [actualPrice, setactualPrice] = useState(0);
  const discount = actualPrice - total;
  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curr) => acc + Number(curr.discountPrice) * Number(curr.qty),
        0
      )
    );

    setactualPrice(
      cart.reduce((acc, curr) => acc + Number(curr.price) * Number(curr.qty), 0)
    );
  }, [cart]);

  return (
    <>
      <div className="details-wrap">
        <div className="gh-card card">
          <div className="gh-card-content card-content">
            <div className="h6 text-bold price-text">PRICE DETAILS</div>
            <hr className="hr" />
            <div className="detail-wrap">
              <span className="text-small price-text">Price</span>
              <span className="text-small price-text">Rs.{actualPrice}</span>
            </div>
            <div className="detail-wrap">
              <span className="text-small price-text">Discount</span>
              <span className="text-small price-text">Rs.{discount}</span>
            </div>
            <div className="detail-wrap">
              <span className="text-small price-text">Delivery Charges</span>
              <span className="text-small price-text">Rs.0</span>
            </div>
            <hr className="hr" />
            <div className="detail-wrap">
              <span className="h6 text-bold price-text">TOTAL AMOUNT</span>
              <span className="h6 text-bold price-text">Rs.{total}</span>
            </div>
            <hr className="hr" />
            <div className="detail-wrap">
              <span className="text-small price-text">
                You will save Rs.{discount} on this order
              </span>
            </div>
            <div className="card-btn-container gh-btn-container">
              <button className="card-btn gh-btn gh-btn-primary gh-btn-inline">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartcardamount;
