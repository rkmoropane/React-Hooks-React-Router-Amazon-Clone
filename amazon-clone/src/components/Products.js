import React from "react";
import { Link } from "react-router-dom";

import "./Products.css";
import Product from "./Product";

const Products = () => {
  return (
    <>
      <div className="products_row">
        <Product
          id="1"
          title="Apple MacBook Air 13-inch Laptop M5 chip (10-core CPU and 8-core GPU):
          Built for AI, 13.6-inch Liquid Retina Display, 16GB Unified Memory,
          512GB SSD, 12MP Center Stage, Touch ID, Wi-Fi 7; Midnight"
          image="https://m.media-amazon.com/images/I/71APX2UPTVL._AC_UL480_QL65_.jpg"
          rating="4"
          price="$1 300.00"
        />
        <Product
          id="2"
          title="Apple iPad with A16 chip: 11-inch Liquid Retina Display, 128 GB, Wi-Fi 6, 12MP Front / 12MP Back Camera, Touch ID, All-Day Battery Life — Blue"
          image="https://m.media-amazon.com/images/I/616z23YvqML._AC_UL480_QL65_.jpg"
          rating="4.5"
          price="$459.00"
        />

        <Product
          id="3"
          title="Skytech Gaming Azure 3 Gaming PC Desktop, Ryzen 7 9800X3D 4.7 GHz (5.2 GHz Turbo), NVIDIA RTX 5080 16GB, X670 Board, 2TB NVMe SSD, 32GB DDR5 RAM 6000 RGB, 850W Gold ATX 3 PSU, 360mm ARGB AIO"
          image="https://m.media-amazon.com/images/I/81o6CZdsM2L._AC_UL480_QL65_.jpg"
          rating="4"
          price="$4 118.00"
        />

        {/* <h1>Products List</h1>

      <ul>
        <li>
          <Link to="/products/01">Product 1</Link>
        </li>
        <li>
          <Link to="/products/02">Product 2</Link>
        </li>
        <li>
          <Link to="/products/03">Product 3</Link>
        </li>
      </ul> */}
      </div>
      <div className="products_row">
        <Product
          id="4"
          title="Rechargeable Wireless Bluetooth Mouse, Portable Ergonomic Mouse with Long Battery Life for Windows, macOS and Android Devices for Laptop and Desktop (Gray)"
          image="https://m.media-amazon.com/images/I/51B81zT5r5L._AC_SR480,440_.jpg"
          rating="4"
          price="$7.00"
        />

        <Product
          id="5"
          title="Astrum Compact Mini Keyboard, 80 Keys, Silent, Spill-Resistant, USB – KB350 | 80 keys, 7 multimedia keys, silent soft-touch, spill-resistant, UV-engraved caps, tilt legs, 255g, 1.2m cable."
          image="https://m.media-amazon.com/images/I/51Sc2182SPL._AC_SR480,440_.jpg"
          rating="3.8"
          price="$9.00"
        />

        <Product
          id="6"
          title='HP 250RT G9 Notebook 15.6" FHD Intel N150 8GB RAM 256GB SSD Windows 11 Home - Dark ash silver'
          image="https://m.media-amazon.com/images/I/71hIfTq8iRL._AC_SR480,440_.jpg"
          rating="3.8"
          price="$4 112.00"
        />
      </div>
      <div className="products_row">
        <Product
          id="7"
          title="ASUS ZenScreen MB169CK Portable USB Monitor- 16 inch (15.6 inch viewable), Full HD, IPS, dual USB Type-C, Flicker Free, Blue Light Filter, Anti-glare surface, 360° kickstand"
          image="https://m.media-amazon.com/images/I/81Dm7lfe3zL._AC_SR480,440_.jpg"
          rating="4.5"
          price="$100.00"
        />
      </div>
    </>
  );
};

export default Products;
