import "./Postpage.css";

export default function Postpage() {
  const post = {
    id: 42,
    title: "Modern Wireless Headphones",
    description:
      "Experience the freedom of wireless sound with our latest headphones. Featuring noise cancellation, 30-hour battery life, and a sleek, comfortable design. Enjoy immersive audio and seamless Bluetooth connectivity for all your devices.",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    price: "$129.99",
    category: "Electronics",
    stock: 12,
    brand: "SoundMax",
  };

  return (
    <div>
      <div className="postpage-hero">
        <img src={post.image} alt={post.title} className="postpage-hero-img" />
      </div>
      <section className="postpage-main">
        <div className="postpage-main-left" />
        <div className="postpage-main-right">
          <h1 className="postpage-title">{post.title}</h1>
          <div className="postpage-meta">
            <span className="postpage-rating">
              <span style={{ fontSize: "1.3em" }}>★</span> {post.rating}/5
            </span>
            <span className="postpage-category">{post.category}</span>
            <span className="postpage-brand">Brand: {post.brand}</span>
            <span
              className={
                post.stock > 0 ? "postpage-stock" : "postpage-stock out"
              }
            >
              {post.stock > 0 ? `In Stock (${post.stock})` : "Out of Stock"}
            </span>
          </div>
          <div className="postpage-desc">{post.description}</div>
          <div className="postpage-price-row">
            <span className="postpage-price">{post.price}</span>
            <span className="postpage-id">Product ID: #{post.id}</span>
          </div>
          <div className="postpage-actions">
            <button className="postpage-buy-btn" disabled={post.stock === 0}>
              {post.stock > 0 ? "Buy Now" : "Out of Stock"}
            </button>
            <button className="postpage-wishlist-btn">Add to Wishlist</button>
          </div>
        </div>
      </section>
    </div>
  );
}
