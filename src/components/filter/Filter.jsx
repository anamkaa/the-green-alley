import React from 'react';

const Filter = () => {
  return (
    <>
    <aside className="gh-filter-wrap" id="gh-filter-wrap">
      <div className="gh-filter-wrap-row">
        <div className="h6 text-bold gh-filter-title">Filters</div>
        <div className="h6 gh-filter-clear gh-filter-title" id="btn-filter-clear">Clear</div>
      </div>
      <div className="gh-filter-wrap-col gh-filter-margin">
        <div className="h5 text-bold gh-filter-title">Price</div>
        <div className="gh-filter-slider">
          <span className="gh-slider-text">0</span>
          <span className="gh-slider-text">500</span>
          <span className="gh-slider-text">5000</span>
        </div>
        <input type="range" className="gh-slider"></input>
      </div>

      <div className="gh-filter-wrap-col gh-filter-margin">
        <div className="h5 text-bold gh-filter-title">Category</div>
        <div className="gh-filter-wrap-row">
          <input type="checkbox" id="indoor"></input>
          <label for="indoor" className="gh-filter-text">Plant-Pots</label>
        </div>
        <div className="gh-filter-wrap-row">
          <input type="checkbox" id="outdoor"></input>
          <label for="outdoor" className="gh-filter-text">Grown-Plants</label>
        </div>
        <div className="gh-filter-wrap-row">
          <input type="checkbox" id="air-purify"></input>
          <label for="air-purify" className="gh-filter-text">Garden-Tools</label>
        </div>
        {/* <div className="gh-filter-wrap-row">
          <input type="checkbox" id="flowering"></input>
          <label for="flowering" className="gh-filter-text">Flowering</label>
        </div>
        <div className="gh-filter-wrap-row">
          <input type="checkbox" id="ayurvedic"></input>
          <label for="ayurvedic" className="gh-filter-text">Ayurvedic</label>
        </div>
        <div className="gh-filter-wrap-row">
          <input type="checkbox" id="decorative"></input>
          <label for="decorative" className="gh-filter-text">Decorative</label>
        </div> */}

      </div>

      <div className="gh-filter-wrap-col gh-filter-margin">
        <div className="h5 text-bold gh-filter-title">Ratings</div>
        <div className="gh-filter-wrap-row">
          <input type="radio" name="rating" id="four-star" value="4star-above"></input>
          <label for="four-star" className="gh-filter-text">4 Star and above</label>
        </div>
        <div className="gh-filter-wrap-row">
          <input type="radio" name="rating" id="three-star" value="3star-above"></input>
          <label for="three-star" className="gh-filter-text">3 Star and above</label>
        </div>
        <div className="gh-filter-wrap-row">
          <input type="radio" name="rating" id="two-star" value="2star-above"></input>
          <label for="two-star" className="gh-filter-text">2 Star and above</label>
        </div>

      </div>

      <div className="gh-filter-wrap-col gh-filter-margin">
        <div className="h5 text-bold gh-filter-title">Sort by</div>
        <div className="gh-filter-wrap-row">
          <input type="radio" name="sort" id="low-high" value="low-to-high"></input>
          <label for="low-high" className="gh-filter-text">Price - Low to High</label>
        </div>
        <div className="gh-filter-wrap-row">
          <input type="radio" name="sort" id="high-low" value="high-to-low"></input>
          <label for="high-low" className="gh-filter-text">Price - High to Low</label>
        </div>
        <div className="gh-filter-wrap-row">
          <input type="radio" name="sort" id="popularity" value="popularity"></input>
          <label for="popularity" className="gh-filter-text">Popularity</label>
        </div>

      </div>

    </aside>
    </>
  )
}

export default Filter;