import React from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";

function StartJourneyCard() {
  return (
    <div className="bg-white" style={{ padding: "5rem 0" }}>
      <p className="text-primaryDark mb-4 fs-3 fs-md-1 fw-bold text-center">Start your crypto journey, today!</p>
      <div className="d-flex flex-row align-items-center justify-content-center">
        <div className="mb-md-0">
          <UIButton type="primary">Get started</UIButton>
        </div>
        <UIButton>Launch App</UIButton>
      </div>
    </div>
  );
}

export default StartJourneyCard;
