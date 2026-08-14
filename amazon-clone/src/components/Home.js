import React from "react";
// import {} from "react-router-dom";

import "./Home.css"
import Products from "./Products";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg"
          // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Hero Image"
        />
        <Products />
      </div>
      {/* <h1>Home page</h1>
      <Route path="/home/username">
        <p>Welcome Username!</p>
      </Route> */}
    </div>
  );
};

export default Home;
