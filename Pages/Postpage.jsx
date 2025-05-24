import "./Postpage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLaptop } from "../src/hooks/useDocs";
export default function Postpage() {
  const { id } = useParams();
  const [laptop, setLaptop] = useState({});
  async function fetchData() {
    const data = await getLaptop(id);
    setLaptop(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="postpage-hero">
        <img
          src={laptop.image}
          alt={laptop.title}
          className="postpage-hero-img"
        />
      </div>
      <section className="postpage-main">
        <div className="postpage-main-left" />
        <div className="postpage-main-right">
          <h1 className="postpage-title">
            {laptop.title} # {id}
          </h1>
          <div className="postpage-meta">
            <span className="postpage-rating">
              <span style={{ fontSize: "1.3em" }}>★</span> {laptop.rating}/5
            </span>
            <span className="postpage-category">Laptops</span>
            <span className="postpage-brand">Brand: {laptop.title}</span>
          </div>
          <div className="postpage-desc">{laptop.title}</div>
          <div className="postpage-price-row">
            <span className="postpage-price">${laptop.price}</span>
            <span className="postpage-id">laptop ID: #{id}</span>
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
