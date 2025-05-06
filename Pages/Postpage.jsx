import "./Postpage.css";

export default function Postpage() {
  const post = {
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

  return (
    <div>
      <div className="postpage-hero">
        <img src={post.image} alt={post.title} className="postpage-hero-img" />
      </div>
      <section className="postpage-main">
        <div className="postpage-main-left" />
        <div className="postpage-main-right">
          <h1 className="postpage-title">
            {post.title} # {post.id}
          </h1>
          <div className="postpage-meta">
            <span className="postpage-rating">
              <span style={{ fontSize: "1.3em" }}>★</span> {post.rating?.rate}/5
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
            <span className="postpage-price">${post.price}</span>
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
