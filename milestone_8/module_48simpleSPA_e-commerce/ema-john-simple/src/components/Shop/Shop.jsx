import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  //display product in the UI
  const [displayProducts,setDisplayProducts]=useState([])
  useEffect(() => {
    console.log("product API called");
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
        console.log("product received");
      });
  }, []);

  useEffect(() => {
    console.log("localstorage cart called");
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        console.log(key, savedCart[key]);
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity; //add custom
          console.log(addedProduct);
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    //save to local storage (for now)
    addToDb(product.key);
  };

  const handleSearch=(event)=>{
      const searchText=event.target.value;
      const matchedProducts = products.filter(product => product.name.
        toLowerCase().includes(searchText.toLowerCase()))
      
    // console.log(matchedProducts.length);
    setDisplayProducts(matchedProducts)
  }
  return (
    <div>
      <div className="search-container">
        <input onChange={handleSearch} type="text" placeholder="search product" />
      </div>
      <div className="shop-container">
        <div className="product-container">
          {displayProducts.map((product) => (
            <Product
              handleAddToCart={handleAddToCart}
              key={product.key}
              product={product}
            />
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
