import React from 'react'

const Wishlistcard = () => {
  return (
    <>
    <div className="gh-card card card-image shadow">
        <i className="ph-x card-icon-dismiss gh-dismiss"></i>
        <div className="card-image-container">
          <img
            src="https://imgcdn.floweraura.com/Express-Products-17-A.jpg"
            alt="card-image"
            className="card-image"
          />
          <div className="card-rating">
            <span className="rating">4.7</span>
            <i className="fas fa-star card-icon-star"></i> | 78
          </div>
        </div>
        <div className="card-content">
          <div className="gh-card-title card-image-content-title">Indian Jade</div>
          <div className="card-image-content-text">Set of 2 Plants</div>
          <div className="gh-filter-wrap-row price-text">
            <span>Rs. 696</span> &nbsp;
            <del>Rs. 839</del> &nbsp;
            <span className="card-text-red">(17% OFF)</span>
          </div>
        </div>
        <div className="card-btn-container gh-btn-container">
          <button className="card-btn gh-btn gh-btn-primary">Move to cart</button>
        </div>
      </div>
    </>
  )
}

export default Wishlistcard;
