import React from "react";

function UICard({ children }) {
  return (
    <div className="card shadow p-3 mb-5 bg-white rounded mx-0 mx-md-4 border-primaryText" style={{ "--bs-border-opacity": 0.25 }}>
      {children}
    </div>
  );
}

export default UICard;
