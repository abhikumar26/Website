import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Accountdetails from "./Accountdetails";

const ProductDetails = () => {
  const { id } = useParams(); // get id directly
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch single product
  const getProduct = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  // Navigate back
  const handleBack = () => {
    navigate("/");
  };

  // Loading state
  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  // No product found
  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
  }

  return (
    <div className="product-container">
      <div className="card details-card">
        <button className="back-btn" onClick={handleBack}>
          ⬅ Back
        </button>

        <img src={product.image} alt={product.title} />

        <h2>{product.title}</h2>
        <p>{product.description}</p>

        <h3 className="price">₹{product.price}</h3>

        <div className="btn-group">
          <button className="add-btn"onClick={()=>alert("The item added to card")}>Add to Cart</button>
          <button className="buy-btn" onClick={()=>navigate("/account")}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;