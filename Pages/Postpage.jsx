import "./Postpage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../src/hooks/useDocs";
export default function Postpage() {
  const post1 = {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.6, count: 400 },
  };

  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProduct(id);
      setProduct(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="postpage-hero">
        <img
          src={product.imageurl}
          alt={product.title}
          className="postpage-hero-img"
        />
      </div>
      <section className="postpage-main">
        <div className="postpage-main-left" />
        <div className="postpage-main-right">
          <h1 className="postpage-title">
            {product.title} # {id}
          </h1>
          <div className="postpage-meta">
            <span className="postpage-rating">
              <span style={{ fontSize: "1.3em" }}>★</span> {product.rating}/5
            </span>
            <span className="postpage-category">Laptops</span>
            <span className="postpage-brand">Brand: {product.title}</span>
          </div>
          <div className="postpage-desc">{product.title}</div>
          <div className="postpage-price-row">
            <span className="postpage-price">${product.price}</span>
            <span className="postpage-id">Product ID: #{id}</span>
          </div>
          <div className="postpage-actions">
            <button className="postpage-buy-btn">Buy Now</button>
            <button className="postpage-wishlist-btn">Add to Wishlist</button>
          </div>
        </div>
      </section>
    </div>
  );
}
