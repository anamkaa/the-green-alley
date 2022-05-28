import React from 'react';
import { useCart } from '../../context/cart-context';
import { useWishlist } from '../../context/wishlist-context';

const Productcard = ({product}) => {

  const {addToCart} = useCart();
  const {addToWishlist} = useWishlist();
  return (
   <>
   <div className="gh-card card card-image shadow">
        <div className="card-image-container">
          <i className="ph-heart card-icon-heart gh-heart"></i>
          <img src={product.imgSrc} alt="product-image" className="card-image" />
          <div className="card-rating">
            <span className="rating">{product.rating}</span>
            <i className="fas fa-star card-icon-star"></i> | {product.review}
          </div>
        </div>
        <div className="card-content" >
          <div className="gh-card-title card-image-content-title">{product.name}</div>
    
          <div className="price-text">
          <del className="card-text-red">{product.price}</del>
          <span style={{fontSize:"1.2rem"}}>{product.discountPrice}</span>
          <span>{product.off}</span>
          </div>
        </div>
        <div className="card-btn-container gh-btn-container">
          <button className="card-btn gh-btn gh-btn-primary" onClick={()=>addToCart()}>Add to Cart</button>
          <button className="card-btn gh-btn gh-btn-secondary" onClick={()=>addToWishlist()}>Wishlist</button>
        </div>
      </div>
   </>
  )
}

export default Productcard;