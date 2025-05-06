import "./Card.css";
export default function Card({ title, body, image, rating, id }) {
  return (
    <div className="normal-card">
      <img className="normal-card-img" src={image} alt="card visual" />
      <div className="normal-card-content">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 className="normal-card-title">{title}</h3>
          <span className="normal-card-id" title="Card ID">
            #{id}
          </span>
        </div>
        <p className="normal-card-body">{body}</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <div className="normal-card-rating">⭐ {rating}/5</div>
          <button className="normal-card-details-btn">
            <a href="/post/5">Details →</a>
          </button>
        </div>
      </div>
    </div>
  );
}
