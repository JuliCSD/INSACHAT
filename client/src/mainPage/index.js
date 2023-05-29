import React from "react";
import { Link } from "react-router-dom";
import photo1 from "../img/1.jpg";
import photo2 from "../img/2.jpg";



function MainPage() {
  // Sample data for multiple products
  const products = [
    { id: 1, title: "Nike T max", image: photo1 },
    { id: 2, title: "Amazon Echo", image: photo2 },
    // ...
  ];

  return (
    <div className="mainPage">
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}> 
        <img src={product.image} alt={product.title} style={{ width: "200px", height: "200px" }} />
      </Link>
        
      ))}
    </div>
  );
}

export default MainPage;
