import React from 'react';
import Cartcardamount from '../components/card/Cartcardamount';
import Cartcardproduct from '../components/card/Cartcardproduct';
import Navbar from "../components/navbar/Navbar";

const Cartmanagement = () => {
  const urlPathname = window.location.pathname;
  console.log({urlPathname});
  return (
   <>
   <Navbar/>
    <div className="gh-cart-wrap">
      <div className="gh-card-wrap">
        <Cartcardproduct/>
        <Cartcardproduct/>
        <Cartcardproduct/>
        </div>
        <div className="gh-card-wrap">
        <Cartcardamount/>
        </div>
      </div>
   </>
  )
}

export default Cartmanagement;