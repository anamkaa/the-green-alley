import React from 'react';
import { PlusCircle,MinusCircle } from 'phosphor-react';

const Cartcardproduct = () => {
  return (
   <>
   <div className="gh-hr-card card card-image card-hr shadow gh-hr-card-res">
          <div className="card-image-container card-hr-image-container  hr-card-media">
            <img
              src="https://imgcdn.floweraura.com/Express-Products-17-A.jpg" alt="flower"
            />
          </div>

          <div className="gh-hr-card-content card-hr-content">
            <div className="card-content">
              <div className="gh-card-title card-image-content-title">
                Indian Jade
              </div>
              <div className="card-image-content-text">Set of 2 Plants</div>
              <div className="gh-filter-wrap-row price-text">
                <span>Rs. 696</span> &nbsp;
                <del>Rs. 839</del> &nbsp;
                <span className="card-text-red">(17% OFF)</span>
              </div>
            </div>
            <div className="gh-filter-wrap-row">
            <PlusCircle size={32}  className="gh-cart-icon"/>
              <span className="gh-badge">1</span>
              <MinusCircle size={32}  className="gh-cart-icon"/>
            </div>

            <div className="card-btn-container">
              <button className="card-btn gh-btn gh-btn-primary">
                Remove from Cart
              </button>
              <button className="card-btn gh-btn gh-btn-secondary">
                Move to Wishlist
              </button>
            </div>
          </div>
        </div>
   </>
  )
}

export default Cartcardproduct