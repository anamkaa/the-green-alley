import React from "react";
import { useFilter } from "../../context/filter-context";

const Filter = () => {
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
    filterDispatch,
  } = useFilter();

  return (
    <>
      <aside className="gh-filter-wrap" id="gh-filter-wrap">
        <div className="gh-filter-wrap-row">
          <div className="h6 text-bold gh-filter-title">Filters</div>
          <div
            className="h6 gh-filter-clear gh-filter-title"
            id="btn-filter-clear"
            style={{ cursor: "pointer" }}
            onClick={() => {
              filterDispatch({ type: "CLEAR_FILTERS" });
            }}
          >
            Clear
          </div>
        </div>
        <div className="gh-filter-wrap-col gh-filter-margin">
          <div className="h5 text-bold gh-filter-title">Price</div>
          <div className="gh-filter-slider">
            <span className="gh-slider-text">0</span>
            <span className="gh-slider-text">300</span>
            <span className="gh-slider-text">600</span>
            <span className="gh-slider-text">900</span>
          </div>
          <input
            type="range"
            className="gh-slider"
            max="900"
            step="300"
            min="0"
            value={byRange}
            checked={byRange}
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_PRICE",
                payload: e.target.value,
              })
            }
          ></input>
        </div>

        <div className="gh-filter-wrap-col gh-filter-margin">
          <div className="h5 text-bold gh-filter-title">Category</div>

          <div className="gh-filter-wrap-row">
            <input
              type="checkbox"
              id="plant-pots"
              onChange={() => {
                filterDispatch({ type: "FILTER_BY_POTCATEGORY" });
              }}
              checked={byPotCategory}
            ></input>
            <label for="plant-pots" className="gh-filter-text">
              Plant-Pots
            </label>
          </div>

          <div className="gh-filter-wrap-row">
            <input
              type="checkbox"
              id="grown-plants"
              onChange={() => {
                filterDispatch({ type: "FILTER_BY_PLANTCATEGORY" });
              }}
              checked={byPlantCategory}
            ></input>
            <label for="grown-plants" className="gh-filter-text">
              Grown-Plants
            </label>
          </div>

          <div className="gh-filter-wrap-row">
            <input
              type="checkbox"
              id="garden-tools"
              onChange={() => {
                filterDispatch({ type: "FILTER_BY_TOOLCATEGORY" });
              }}
              checked={byToolCategory}
            ></input>
            <label for="garden-tools" className="gh-filter-text">
              Garden-Tools
            </label>
          </div>
        </div>

        <div className="gh-filter-wrap-col gh-filter-margin">
          <div className="h5 text-bold gh-filter-title">In-Stock</div>
          <div className="gh-filter-wrap-row">
            <input
              type="checkbox"
              id="out-of-stock"
              onChange={() => {
                filterDispatch({ type: "FILTER_BY_STOCK" });
              }}
              checked={byStock}
            ></input>
            <label for="out-of-stock" className="gh-filter-text">
              Remove out-of-stock
            </label>
          </div>
        </div>

        <div className="gh-filter-wrap-col gh-filter-margin">
          <div className="h5 text-bold gh-filter-title">Ratings</div>

          <div className="gh-filter-wrap-row">
            <input
              type="radio"
              name="rating"
              id="four-star"
              value="4star-above"
              onChange={() => {
                filterDispatch({ type: "FILTER_BY_RATING", payload: 4 });
              }}
              checked={byRating === 4 ? true : false}
            ></input>
            <label for="four-star" className="gh-filter-text">
              4 Star and above
            </label>
          </div>

          <div className="gh-filter-wrap-row">
            <input
              type="radio"
              name="rating"
              id="three-star"
              value="3star-above"
              onChange={() => {
                filterDispatch({ type: "FILTER_BY_RATING", payload: 3 });
              }}
              checked={byRating === 3 ? true : false}
            ></input>
            <label for="three-star" className="gh-filter-text">
              3 Star and above
            </label>
          </div>

          <div className="gh-filter-wrap-row">
            <input
              type="radio"
              name="rating"
              id="two-star"
              value="2star-above"
              onChange={() => {
                filterDispatch({ type: "FILTER_BY_RATING", payload: 2 });
              }}
              checked={byRating === 2 ? true : false}
            ></input>
            <label for="two-star" className="gh-filter-text">
              2 Star and above
            </label>
          </div>
          {/**/}
        </div>

        <div className="gh-filter-wrap-col gh-filter-margin">
          <div className="h5 text-bold gh-filter-title">Sort by</div>
          <div className="gh-filter-wrap-row">
            <input
              type="radio"
              name="sort"
              id="low-high"
              onChange={() => {
                filterDispatch({ type: "FILTER_BY_LOWTOHIGH" });
              }}
              checked={bySort === "FILTER_BY_LOWTOHIGH"}
            ></input>

            <label htmlFor="low-high" className="gh-filter-text">
              Price - Low to High
            </label>
          </div>
          <div className="gh-filter-wrap-row">
            <input
              type="radio"
              name="sort"
              id="high-low"
              onChange={() => {
                filterDispatch({ type: "FILTER_BY_HIGHTOLOW" });
              }}
              checked={bySort === "FILTER_BY_HIGHTOLOW"}
            ></input>

            <label htmlFor="high-low" className="gh-filter-text">
              Price - High to Low
            </label>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Filter;
