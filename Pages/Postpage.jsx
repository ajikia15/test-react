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
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%)",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          height: 420,
          position: "relative",
          overflow: "hidden",
          background: "#e5eaf1",
        }}
      >
        <img
          src={post.image}
          alt={post.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(0.92) saturate(1.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            background: "linear-gradient(0deg, #fff 60%, #fff0 100%)",
            height: 120,
          }}
        />
      </div>
      <section
        style={{
          width: "100%",
          maxWidth: 1300,
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          gap: 0,
          padding: "0 0 48px 0",
          background: "none",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }} />
        <div
          style={{
            flex: 2.5,
            padding: "0 48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            background: "none",
          }}
        >
          <h1
            style={{
              fontWeight: 900,
              fontSize: "2.8rem",
              color: "#1e293b",
              margin: "40px 0 18px 0",
              lineHeight: 1.08,
            }}
          >
            {post.title}
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              marginBottom: 18,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                color: "#f59e0b",
                fontWeight: 700,
                fontSize: "1.18rem",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span style={{ fontSize: "1.3em" }}>★</span> {post.rating}/5
            </span>
            <span
              style={{
                background: "#e0e7ef",
                color: "#6366f1",
                borderRadius: 8,
                padding: "4px 16px",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              {post.category}
            </span>
            <span
              style={{ color: "#64748b", fontWeight: 500, fontSize: "1rem" }}
            >
              Brand: {post.brand}
            </span>
            <span
              style={{
                color: post.stock > 0 ? "#22c55e" : "#ef4444",
                fontWeight: 700,
                fontSize: "1rem",
                marginLeft: 12,
              }}
            >
              {post.stock > 0 ? `In Stock (${post.stock})` : "Out of Stock"}
            </span>
          </div>
          <div
            style={{
              color: "#475569",
              fontSize: "1.22rem",
              marginBottom: 36,
              lineHeight: 1.7,
              maxWidth: 700,
            }}
          >
            {post.description}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 40,
              marginBottom: 48,
            }}
          >
            <span
              style={{
                color: "#0ea5e9",
                fontWeight: 900,
                fontSize: "2.5rem",
                letterSpacing: "-1px",
              }}
            >
              {post.price}
            </span>
            <span
              style={{ color: "#cbd5e1", fontWeight: 500, fontSize: "1.1rem" }}
            >
              Product ID: #{post.id}
            </span>
          </div>
          <div style={{ display: "flex", gap: 22 }}>
            <button
              style={{
                background: post.stock > 0 ? "#6366f1" : "#cbd5e1",
                color: post.stock > 0 ? "#fff" : "#64748b",
                border: "none",
                borderRadius: 10,
                padding: "20px 64px",
                fontWeight: 800,
                fontSize: "1.22rem",
                boxShadow: post.stock > 0 ? "0 2px 8px #6366f122" : "none",
                cursor: post.stock > 0 ? "pointer" : "not-allowed",
                transition:
                  "background 0.18s, transform 0.15s, box-shadow 0.18s",
                letterSpacing: "0.02em",
                outline: "none",
              }}
              disabled={post.stock === 0}
            >
              {post.stock > 0 ? "Buy Now" : "Out of Stock"}
            </button>
            <button
              style={{
                background: "none",
                color: "#6366f1",
                border: "2px solid #6366f1",
                borderRadius: 10,
                padding: "20px 48px",
                fontWeight: 700,
                fontSize: "1.13rem",
                marginLeft: 0,
                cursor: "pointer",
                transition: "background 0.18s, color 0.18s",
                outline: "none",
              }}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
