import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const navigate = useNavigate();

  const getProducts = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/`)
    const data = await res.json();
    setProducts(data);
    setAllProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const showDetail = (item) => {
    navigate(`user/${item.id}`);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = allProducts.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
    setProducts(filtered);
  };

  const handleSort = (e) => {
    const value = e.target.value;
    let sorted = [...products];

    if (value === "low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "high") {
      sorted.sort((a, b) => b.price - a.price);
    } else {
      sorted = [...allProducts];
    }

    setProducts(sorted);
  };

  return (
    <div style={{ position: "relative", padding: "20px" }}>

      {/* 🔴 Title */}
      <h1 style={{ color: "red", fontSize: "60px" }}>TRENDS</h1>

      {/* 🔍 Search (Top Right) */}
      <input
        type="search"
        placeholder="Search products..."
        onChange={handleSearch}
        style={{
          position: "absolute",
          top: "30px",
          right: "30px",
          padding: "10px 15px",
          width: "260px",
          borderRadius: "25px",
          border: "1px solid #ccc",
          outline: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}
      />

     {/* 🔽 Sort (CENTER TOP CENTERED) */}
<div
  style={{
    position: "absolute",
    top: "30px",          // distance from top
    left: "50%",          // move to horizontal center
    transform: "translateX(-50%)", // perfectly center horizontally
  }}
>
  <select
    onChange={handleSort}
    style={{
      padding: "10px 20px",
      borderRadius: "25px",
      border: "1px solid #ccc",
      fontSize: "14px",
      cursor: "pointer",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}
  >
    <option value="">All products</option>
    <option value="low">Price low to high</option>
    <option value="high">Price high to low</option>
  </select>
</div>


      {/* 🛍 Products */}
      <div className="product-container">
        {products.length > 0 ? (
          products.map((item) => (
            <div
              className="card"
              key={item.id}
              onClick={() => showDetail(item)}
            >
              <img src={item.image} alt={item.title} />
              <div>{item.title}</div>
              <div style={{ color: "green", fontWeight: "bold" }}>
                ₹{item.price}
              </div>
            </div>
          ))
        ) : (
          <p>Sorry! No products available!</p>
        )}
      </div>

    </div>
  );
};

export default Products;