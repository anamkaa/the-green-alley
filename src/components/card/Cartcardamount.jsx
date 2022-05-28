import React from 'react';

const Cartcardamount = () => {
  return (
   <>
   <div className="details-wrap">
        <div className="gh-card card">
          <div className="gh-card-content card-content">

            <div className="h6 text-bold price-text">PRICE DETAILS</div>
            <hr className="hr" />
            <div className="detail-wrap">
              <span className="text-small price-text">Price</span>
              <span className="text-small price-text">Rs.4999</span>
            </div>
            <div className="detail-wrap">
              <span className="text-small price-text">Discount</span>
              <span className="text-small price-text">-Rs.1999</span>
            </div>
            <div className="detail-wrap">
              <span className="text-small price-text">Delivery Charges</span>
              <span className="text-small price-text">Rs.499</span>
            </div>
            <hr className="hr" />
            <div className="detail-wrap">
              <span className="h6 text-bold price-text">TOTAL AMOUNT</span>
              <span className="h6 text-bold price-text">Rs.3499</span>
            </div>
            <hr className="hr" />
            <div className="detail-wrap">
              <span className="text-small price-text"
                >You will save Rs.1999 on this order</span
              >
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
  )
}

export default Cartcardamount