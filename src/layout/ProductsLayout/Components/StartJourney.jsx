import React from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";

function StartJourney() {
  return (
    <div className="bg-white" style={{ padding: "5rem 0" }}>
      <p className="text-primaryDark mb-4 pt-3 fs-4 fs-md-1 fw-bold text-center">Start your crypto journey, today!</p>
      <div className="d-flex flex-row align-items-center justify-content-center">
        <div className="mb-4 mb-md-0">
          <UIButton type="primary">Get started</UIButton>
        </div>
        <UIButton>Discover Swidge</UIButton>
      </div>
    </div>
  );
}

export default StartJourney;