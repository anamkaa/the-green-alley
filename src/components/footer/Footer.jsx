import React from 'react';
import { TwitterLogo,InstagramLogo,FacebookLogo,PinterestLogo,YoutubeLogo } from 'phosphor-react';

const Footer = () => {
  return (
      <>
      
      <footer className="gh-home-foot">

    <div className="mx-11">
      <div className="gh-home-foot-mid">
        <div className="gh-home-foot-icon-wrap">
         <a href="#"> <TwitterLogo size={26} /></a>
         <a href="#"><InstagramLogo size={26} /> </a>
          <a href="#"> <FacebookLogo size={26} /></a>
          <a href="#"><PinterestLogo size={26} /></a>
          <a href="#"><YoutubeLogo size={26} /></a>
        </div>

        <div className="gh-care">
          <div className="gh-home-foot-head-pill">
            <span><span className="text-bold">Customer Care:</span> +00 0000</span>
          </div>
          <div className="gh-home-foot-head-pill">
            <span> <span className="text-bold">Email Us:</span> support@greenalley.com</span>
          </div>
        </div>

      </div>
  
      <div className="gh-home-foot-head">
        <div className="gh-home-foot-head-pill">
          <a href="#"><span>About Us</span></a>
          <a href="#"><span>Contact Us</span></a>
        </div>
        <div className="gh-home-foot-head-pill">
          <a href="#"> <span>Track Order</span></a>
            <a href="#"> <span>Shipping Policy</span></a>
        </div>
        <div className="gh-home-foot-head-pill">
          <a href="#"> <span>Privacy Policy</span></a>
            <a href="#"> <span>Terms & Conditions</span></a>
        </div>
        <div className="gh-home-foot-head-pill">
          <a href="#"> <span>Gifting</span></a>
            <a href="#"> <span>FAQs</span></a>
        </div>
      </div>
  
        <div className="text-small text-center">All Rights Reserved 2022 | GreenAlley</div>
    
    </div>
  

  </footer>
      
      </>
    
  )
}

export default Footer;