import React from "react";

function UICard({ children }) {
  return (
    <div className="pb-4 h-100">
      <div className="card shadow px-3 mb-3 pt-3 bg-white rounded mx-0 mx-md-4 border-primaryText h-100" style={{ "--bs-border-opacity": 0.25, zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}

export default UICard;
