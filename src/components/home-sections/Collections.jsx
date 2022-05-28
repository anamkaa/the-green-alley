import React from 'react';

const collections = [
  {
    collectionName: "Indoor Plants",
    imgSrc: "https://greenalley.netlify.app/assets/indoor-pl.jpg"
  },
  {
    collectionName: "Decor Plants",
    imgSrc: "https://greenalley.netlify.app/assets/decor.jpg"
  },
  {
    collectionName: "Low-maintainance Plant",
    imgSrc: "https://greenalley.netlify.app/assets/low-pl.jpg"
  },
  {
    collectionName: "Flowering Plant",
    imgSrc: "https://greenalley.netlify.app/assets/flwr-pl.jpg"
  },
  {
    collectionName: "Air Purifying Plants",
    imgSrc: "https://greenalley.netlify.app/assets/purify-pl.jpg"
  }

];

const CollectionCard = ({collection}) => {
  return (
    <>
    <div className="home-card-pill">
      <img src={collection.imgSrc} alt="card-img" className="home-card-img"/>
      <div className="text-small text-center home-card-txt-sm">{collection.collectionName}</div>
    </div>
    </>
  )
}


const Collections = () => {
  return (
    <>
     <div className="home-title">Collection</div>
     <div className="home-card-wrap">

{
collections.map((item)=>{
  return (<>
  <CollectionCard collection={item} />
  </>)
})
}

    </div>
    </>
  )
}

export default Collections;