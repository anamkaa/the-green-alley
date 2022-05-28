import React from 'react';
import Navbar from '../components/navbar/Navbar';
// import Footer from '../components/footer/Footer';
import Wishlistcard from '../components/card/Wishlistcard';

const Wishlist = () => {
  return (
    <>
    <Navbar/>
    <div className="gh-wishlist-wrap">
        <Wishlistcard/>
        <Wishlistcard/>
        <Wishlistcard/>
        <Wishlistcard/>
    </div>
    </>
  )
}

export default Wishlist;