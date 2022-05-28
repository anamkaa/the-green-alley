import React from 'react';
import {Link} from "react-router-dom";
import DATA from '../../data';

const Hero = () => {
  return (
   <>
   <div className="green-bg">


<div className="gh-hero-wrap">
    
 <div className="gh-hero-text">
  <div className="h1">Grow with Green</div>
   <div className="h5">One stop shop for all your needs</div>
  <Link to="/productlisting/all"><button className="gh-hero-btn">Shop Now</button></Link> 
 </div>
 <div>
  <img src={DATA.CYCLE} alt="hero-image" className="gh-hero-img image" />
 </div>

</div>


  </div>
   </>
  )
}

export default Hero;