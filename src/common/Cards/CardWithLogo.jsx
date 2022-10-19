import React from "react";
import UICard from "../../widgets/UICard/UICard";

function CardWithLogo({ children, title, image }) {
  return (
    <UICard>
      <div className="text-center text-md-start p-3">
        <img src={image} className="bg-cardImageBg border border-2 border-cardImageBorder p-3 rounded" style={{ "--bs-border-opacity": 0.2 }} />
        <div className="d-flex justify-content-center justify-content-md-start">
          <h4 className="mt-3 fw-bold" style={{ color: "#0251ff" }}>
            {title}
          </h4>
        </div>
        <div className="text-cardDescriptionColor d-flex" style={{ color: "#5a5b5b" }}>
          {children}
        </div>
      </div>
    </UICard>
  );
}

export default CardWithLogo;
