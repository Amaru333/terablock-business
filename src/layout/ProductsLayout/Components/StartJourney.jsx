import React, { useState } from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";

function StartJourney() {
  const [buttonText, setButtonText] = useState("Get Started");
  const openNewTab = (link) => {
    window.open(link, '_blank')
  }
  return (
    <div className="bg-white" style={{ padding: "5rem 0" }}>
      <p className="text-primaryDark mb-4 pt-3 fs-4 fs-md-1 fw-bold text-center">Start your crypto journey, today!</p>
      <div className="d-flex flex-row align-items-center justify-content-center">
        <div className="mb-0">
          <UIButton type="primary" width="150px" onClick={() => openNewTab('https://app.terablock.com/getstarted')} onMouseOut={() => setButtonText("Get Started")}>
            {buttonText}
          </UIButton>
        </div>
        <UIButton>Discover Swidge</UIButton>
      </div>
    </div>
  );
}

export default StartJourney;
