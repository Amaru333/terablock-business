import React from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";
import StartCryptoJourneyStyle from "./StartCryptoJourneyCard.module.css";

function StartCryptoJourneyCard() {
  return (
    <div className={StartCryptoJourneyStyle.start_journey}>
      <div className="ms-0 ms-md-2 ms-md-5 pb-2 text-center text-md-start d-flex flex-column flex-md-row align-items-center justify-content-around">
        <p className="text-white mb-4 pt-3 fs-4 fs-md-1 fw-bold">
          Start your crypto journey, <br />
          today!
        </p>
        <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start">
          <div className="mb-4 mb-md-0">
            <UIButton type="secondary" onClick={() => window.open("https://app.terablock.com/getstarted", "_blank")}>Get started</UIButton>
          </div>
          <UIButton type="primary-light">Learn more</UIButton>
        </div>
      </div>
    </div >
  );
}

export default StartCryptoJourneyCard;
