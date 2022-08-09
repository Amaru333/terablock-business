import React from "react";

function UIImageCard({ image, title, description }) {
  return (
    <div className="card shadow" style={{ width: "18rem", zIndex: 2 }}>
      <img src={image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-tableFontColor">{description}</p>
        <p className="mb-0 text-primaryBlue fw-bold">Read more →</p>
      </div>
    </div>
  );
}

export default UIImageCard;
