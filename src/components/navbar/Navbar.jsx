import React from "react";
import { User, HeartStraight, ShoppingCartSimple, Tree } from "phosphor-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { useFilter } from "../../context/filter-context";
import { loginText } from "../../utility";

const Navbar = () => {
  const {
    cartState: { cart },
  } = useCart();
  const {
    wishlistState: { wishlist },
  } = useWishlist();
  const {
    filterState: { bySearch },
    filterDispatch,
  } = useFilter();

  return (
    <>
      <script src="https://unpkg.com/phosphor-icons"></script>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
      />
      <nav className="gh-navbar nav-wrap nav-search-wrap ">
        <Link to="/" className="nav-el-1">
          {" "}
          <div className="gh-nav-head nav-head">
            <Tree size={32} weight="fill" className="green-txt" />
            Green<span className="green-txt">Alley</span>{" "}
          </div>{" "}
        </Link>

        <div className="gh-search-holder nav-search-holder-icon nav-el-2">
          <i className="fa-solid fa-seedling nav-search-icon fas"></i>
          <input
            type="search"
            className="input gh-search"
            placeholder="Search for products, brands and more"
            onChange={(e) => {
              filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
          />
        </div>

        <div className="gh-nav-icon-wrap nav-el-3">
          <Link to="/login">
            <div className="gh-nav-icon-chip nav-icon-chip">
              <User size={24} className="gh-nav-icon" />
              <span className="nav-icon-text">{loginText()}</span>
            </div>
          </Link>

          <Link to="/wishlist">
            <div className="gh-nav-icon-chip nav-icon-chip badge-container">
              <HeartStraight size={24} className="gh-nav-icon " />
              <div className="gh-nav-badge badge badge-online badge-icon badge-text">
                {wishlist.length}
              </div>
              <span className="nav-icon-text">Wishlist</span>
            </div>
          </Link>

          <Link to="/cartmanagement">
            <div className="gh-nav-icon-chip nav-icon-chip badge-container">
              <ShoppingCartSimple size={24} className="gh-nav-icon" />
              <div className="gh-nav-badge badge badge-online badge-icon badge-text">
                {cart.length}
              </div>
              <span className="nav-icon-text">Cart</span>
            </div>
          </Link>
        </div>
      </nav>

      <div className="wrapper">
        <div className="tab-section">Seeds</div>

        <div className="tab-section">Plants</div>

        <div className="tab-section">Pots&Planters</div>

        <div className="tab-section">Tools</div>

        <div className="tab-section">PlantCare</div>

        <div className="tab-section">Gifts</div>

        <div className="tab-section">Offers</div>
      </div>
    </>
  );
};

export default Navbar;
