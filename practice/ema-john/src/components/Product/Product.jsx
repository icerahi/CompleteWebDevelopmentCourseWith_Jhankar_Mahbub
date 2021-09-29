import React from "react";
import "./Product.css";

const Product = ({ product,handleAddToCart}) => {
  const { name,price, img,seller,stock } = product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3 className="product-name">{name}</h3>
        <p>by : {seller}</p>
        <p>${price}</p>
        <p><small>only {stock} left in stock - order soon</small></p>
        <button onClick={()=>handleAddToCart(product)} className="addtocart-btn">add to cart</button>
      </div>
    </div>
  );
};

export default Product;
