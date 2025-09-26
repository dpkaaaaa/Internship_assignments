import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ProductList.css";

const products = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 89,
    image: "https://cdn.pixabay.com/photo/2020/08/27/14/29/sneaker-5522169_1280.jpg",
  },
  {
    id: 2,
    name: "Adidas",
    price: 100,
    image: "https://cdn.pixabay.com/photo/2016/02/22/16/57/sports-1216016_1280.jpg",
  },
  {
    id: 3,
    name: "Puma Classic",
    price: 99,
    image: "https://cdn.pixabay.com/photo/2018/09/27/12/07/puma-3706914_1280.jpg",
  },
];

export default function ProductList() {
  const { addToCart, cartCount, error } = useContext(CartContext);

  return (
    <div className="container">
      <h1> Product Store</h1>
      <p className="cart-count">Cart Items: {cartCount}</p>
      {error && <p className="error">{error}</p>}
      <div className="products">
        {products.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
