import React from "react";
import Productcard from "../components/card/Productcard";
import Footer from "../components/footer/Footer";
import Filter from "../components/filter/Filter";
import Navbar from "../components/navbar/Navbar";
import { useProduct } from "../context/product-context";
import { useFilter } from "../context/filter-context";
import { getSortedProduct } from "../utils/sort-by-price";
import { getCategoryProduct } from "../utils/filter-by-category";
import { getRatingProduct } from "../utils/filter-by-rating";
import { getStockProduct } from "../utils/filter-by-stock";
import { getSearchProduct } from "../utils/filter-by-search";
import { getPricedProduct } from "../utils/filter-by-price";

const Productlisting = () => {
  const {
    state: { product },
  } = useProduct();
  const {
    filterState: {
      bySort,
      byPlantCategory,
      byPotCategory,
      byToolCategory,
      bySearch,
      byStock,
      byRating,
      byRange,
    },
  } = useFilter();

  const CategoryProductList = getCategoryProduct(
    product,
    byPlantCategory,
    byPotCategory,
    byToolCategory
  );
  const RatingProductList = getRatingProduct(CategoryProductList, byRating);
  const StockProductList = getStockProduct(RatingProductList, byStock);
  const SearchProductList = getSearchProduct(StockProductList, bySearch);
  const SortedProductList = getSortedProduct(SearchProductList, bySort);
  const PricedProductList = getPricedProduct(SortedProductList, byRange);

  return (
    <>
      <Navbar />
      <div className="gh-main-wrap">
        <Filter />
        <div className="gh-prod-wrap">
          {PricedProductList.map((item) => {
            return <Productcard key={item._id} product={item} />;
          })}
        </div>
      </div>
      <Footer />
      <div className="filter-btn-wrap">
        <button className="btn-filter" id="btn-filter" value="Filter">
          <i className="ph-list"></i>Filter
        </button>
      </div>
    </>
  );
};

export default Productlisting;
