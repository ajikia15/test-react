import "./Card.css";

export default function SkeletonCard() {
  return (
    <div className="normal-card">
      <div
        className="normal-card-img skeleton-shimmer"
        style={{
          backgroundColor: "#e2e8f0",
          minHeight: "200px",
          borderRadius: "8px 8px 0 0",
        }}
      />
      <div className="normal-card-content">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            className="skeleton-shimmer"
            style={{
              height: "24px",
              width: "70%",
              backgroundColor: "#e2e8f0",
              borderRadius: "4px",
            }}
          />
          <div
            className="skeleton-shimmer"
            style={{
              height: "16px",
              width: "20px",
              backgroundColor: "#e2e8f0",
              borderRadius: "4px",
            }}
          />
        </div>
        <div
          className="skeleton-shimmer"
          style={{
            height: "16px",
            width: "60%",
            backgroundColor: "#e2e8f0",
            borderRadius: "4px",
            marginTop: "8px",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <div
            className="skeleton-shimmer"
            style={{
              height: "20px",
              width: "80px",
              backgroundColor: "#e2e8f0",
              borderRadius: "4px",
            }}
          />
          <div
            className="skeleton-shimmer"
            style={{
              height: "32px",
              width: "80px",
              backgroundColor: "#e2e8f0",
              borderRadius: "4px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
