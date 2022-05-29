import React from 'react'
import Productcard from '../components/card/Productcard'
import Footer from '../components/footer/Footer'
import Filter from '../components/filter/Filter'
import Navbar from '../components/navbar/Navbar'
import { useProduct } from '../context/product-context'
// import { useParams } from 'react-router-dom'


const Productlisting = () => {
  const {state} = useProduct();
  // const categoryName = useParams();


  return (
   <>
   <Navbar/>
   <div className="gh-main-wrap">
       <Filter/>
       <div className="gh-prod-wrap">
           {
             state.product.map((item)=>{
               return <Productcard key={item._id} product={item}  />
             })
           }
       </div>
   </div>
   <Footer/>
   <div className="filter-btn-wrap">
  <button className="btn-filter" id="btn-filter" value="Filter"><i className="ph-list"></i>Filter</button>
</div>
   </>
  )
}

export default Productlisting