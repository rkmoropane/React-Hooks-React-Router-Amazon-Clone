import React from "react";

import "./Product.css"

const Product = (props) => {
  const { id, image, title, rating, price } = props;
  return (
    <div className="product">
      {/* <img
        src="https://m.media-amazon.com/images/I/71APX2UPTVL._AC_SX679_.jpg"
        alt=""
      /> */}
      <img src={image} alt="product-image" />
      <div className="product_info">
        <p>{title}</p>
        <div className="product_rating">
          <p>{rating}</p>
        </div>
        <p className="product_price">{price}</p>
      </div>
      <button className="product_button">Add to Basket</button>
    </div>
  );
};

export default Product;
