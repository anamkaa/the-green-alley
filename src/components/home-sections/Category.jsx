import React from 'react';
import { CaretRight } from 'phosphor-react';
import { useCategory } from '../../context/category-context';
import {Link} from "react-router-dom";




const CategoryCard = ({categoryArray}) => {
 
  return (
    <>
    <Link to={`/productlisting/${categoryArray.categoryName}`}>
<div className="home-card-pill" >
  <img src={categoryArray.imgSrc} alt="home-card-img" className="home-card-img-lg"/>
  <div className="home-card-txt">{categoryArray.categoryName}</div>
  <div className="text-small flex-center txt-explore">Explore<CaretRight size={14} weight="fill" /></div>
</div>
</Link>
    </>
  )
}




const Category = () => {

  const {state} = useCategory();

  return (
    <>

    <div className="home-title">Shop By Category</div>
    <div className="home-card-wrap">

{
  state.category.map((categoryItem)=>{
    return ( <span>
      <CategoryCard categoryArray={categoryItem}/>
      </span>
    )
  })
}


</div>
    </>

  )
}

export default Category;