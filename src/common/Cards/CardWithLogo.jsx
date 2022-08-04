import React from "react";
import UICard from "../../widgets/UICard/UICard";

function CardWithLogo({ children, title, image }) {
  return (
    <UICard>
      <div className="text-center text-md-start">
        <img src={image} className="bg-cardImageBg border border-2 border-cardImageBorder p-3 rounded" style={{ "--bs-border-opacity": 0.2 }} />
        <div className="d-flex h-100">
          <h4 className="text-primaryBlue mt-3">{title}</h4>
        </div>
        <p className="text-cardDescriptionColor d-flex h-100">{children}</p>
      </div>
    </UICard>
  );
}

export default CardWithLogo;
