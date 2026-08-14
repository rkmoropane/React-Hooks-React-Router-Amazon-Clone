import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  // it is used for dynamic to extract the param that was passed into our URL
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Product Details Page</h1>

      <p>{params.id}</p>
    </div>
  );
};

export default ProductDetails;
