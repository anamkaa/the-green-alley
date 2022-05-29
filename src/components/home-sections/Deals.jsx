import React from 'react'; 
import {Handshake , TreeEvergreen , Gift} from "phosphor-react";
import DATA from '../../data';

const Deals = () => {
  return (
    <>

<div className="home-title">Deals For You</div>

<div className="home-card-wrap">
  
  
  <div className="deal-card home-card-pill card">
    <img src={DATA.DEALS} alt="card-img" className="home-card-img-lg" />
    <div className="card deal-card-sm">
      <div className="deal-card-header"><Handshake size={26} /> &nbsp; Deal For You</div>
      <div className="deal-card-text">Shop for Rs.499 and get a free voucher of Rs.99</div>
    </div>
  </div>

  
  <div className="deal-card home-card-pill card">
    <img src={DATA.DEALS} alt="card-img" className="home-card-img-lg" />
    <div className="card deal-card-sm">
      <div className="deal-card-header"><TreeEvergreen size={26} />&nbsp; Collection</div>
      <div className="deal-card-text">Latest collections, grab your green  </div>
    </div>
  </div>

  
  <div className="deal-card home-card-pill card">
    <img src={DATA.DEALS} alt="card-img" className="home-card-img-lg" />
    <div className="card deal-card-sm">
      <div className="deal-card-header"><Gift size={26} />&nbsp;Gifts that Grow</div>
      <div className="deal-card-text">Personalise gifts and hampers for your loved ones</div>
    </div>
  </div>

</div>


    </>
  )
}

export default Deals;