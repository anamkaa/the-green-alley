import React from 'react'

const Bestsellers = () => {
  return (
    <>
    <div className="home-title">Best Sellers</div>
<div className="home-card-wrap">
  
 
  <div className="deal-card home-card-pill card">
    <img src="https://greenalley.netlify.app/assets/brokenhrt.jpg" alt="card-img" className="home-card-img-lg"/>
    <div className="card-content bg-white">
      <div className="gh-card-title card-image-content-title">Broken Heart Plant</div>
       <div style={{textAlign:"center"}}>
        <span className="h6">Rs. 699</span> &nbsp;
        <del className="h6">Rs. 799</del> &nbsp;
      </div>
    </div> 
  </div>

 
  <div className="deal-card home-card-pill card">
    <img src="https://greenalley.netlify.app/assets/aglaonema.jpg" alt="card-img" className="home-card-img-lg"/>
    <div className="card-content bg-white">
      <div className="gh-card-title card-image-content-title">Aglaonema Red Plant</div>
       <div style={{textAlign:"center"}}>
        <span className="h6">Rs. 696</span> &nbsp;
        <del className="h6">Rs. 839</del> &nbsp;
      </div>
    </div>
  </div>

 
  <div className="deal-card home-card-pill card">
    <img src="https://greenalley.netlify.app/assets/monstra.jpg" alt="card-img" className="home-card-img-lg"/>
    <div className="card-content bg-white">
      <div className="gh-card-title card-image-content-title">Monstera Deliciosa Plant</div>
       <div style={{textAlign:"center"}}>
        <span className="h6">Rs. 1399</span> &nbsp;
        <del className="h6">Rs. 1539</del> &nbsp;
      </div>
    </div>
  </div>


</div>
    </>
  )
}

export default Bestsellers;