import { Link } from "react-router-dom";
import "./Card.css";
export default function Card({ id, title, like, image, rating, price }) {
  console.log(id);
  return (
    <div className="normal-card ">
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
          <span className="normal-card-id" title="Card ID"></span>
        </div>
        <p className="normal-card-body">
          {like} likes - {price}$
        </p>
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
            <Link to={`/post/${id}`}>Details → </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
