import React from "react";
import { Link } from "react-router-dom";
// import { NavLink } from 'react-router-dom'; // Use this so that the page doesn't reload the entire page when navigating to different view of the page.
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon-logo"
        />
      </Link>

      <div className="header_search">
        <input className="header_input" type="text" />
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_nav">
        <Link to="/login">
          <div className="header_option">
            <span className="header_optionOne">Hello Guest</span>
            <span className="header_optionTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/order">
            <div className="header_option">
            <span className="header_optionOne">Returns</span>
            <span className="header_optionTwo">& Orders</span>
            </div>
        </Link>


        <Link to="/prime">
          <div className="header_option">
            <span className="header_optionOne">Your</span>
            <span className="header_optionTwo">Prime</span>
          </div>
        </Link>

        <Link to="/shopping">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />

            <span className="Header_optionTwo header_baskertCount"></span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
