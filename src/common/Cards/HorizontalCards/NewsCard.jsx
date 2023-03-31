import Link from "next/link";
import React from "react";

function NewsCard({ image, title, description, difficulty, time, slug, author, center }) {
  const DifficultyTag = ({ level }) => {
    const color = {
      Beginner: "#00C077",
      Intermediate: "#FFA216",
      Advanced: "#F92626",
    };
    return (
      <span className="rounded px-2" style={{ border: `1px solid ${color[level] || "black"}`, fontWeight: "700" }}>
        <span style={{ color: color[level] }}>• </span> {level}
      </span>
    );
  };
  return (
    <Link href={`learn/${slug}`}>
      <div
        className="card"
        style={{
          justifyContent: "space-between",
          width: "18rem",
          zIndex: 2,
          borderRadius: "16px",
          padding: "12px",
          boxShadow: "2px 2px 24px rgba(0, 0, 0, 0.06)",
          minHeight: "420px",
          cursor: "pointer",
          margin: center && "auto",
        }}
      >
        <div>
          <img src={image} className="card-img" />
          <h5 className="card-title pt-3" style={{ fontWeight: "600" }}>
            {title}
          </h5>
        </div>
        <div>
          <div className="text-truncate-container">
            <div className="d-flex justify-content-between mb-2" style={{ fontSize: "14px" }}>
              <DifficultyTag level={difficulty} />
              <div className="d-flex align-items-center">
                <img src="/assets/icons/time.svg" />
                <span style={{ color: "#797979", marginLeft: "5px", fontWeight: "600" }}>{time} mins</span>
              </div>
            </div>
            <p className={"card-text mt-3 truncate"} style={{ color: "#707070", fontSize: "14px", width: "250px" }}>
              {description}
            </p>
            <span style={{ color: "#0052FF", fontWeight: "700" }} className="bottom-0 pb-2">
              Read More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NewsCard;
