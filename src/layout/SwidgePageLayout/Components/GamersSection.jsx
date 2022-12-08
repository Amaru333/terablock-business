import React, { useState } from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";

import GamersSectionStyle from "../Styles/GamersSection.module.css";

function GamersSection() {
  const width = useScreenSize().width;
  const [buttonText, setButtonText] = useState("Get Started");
  return (
    <div className="py-5 bg-white px-0 px-md-2 px-xl-5">
      <div className="text-center mb-2 px-3">
        <h3 className="text-primaryTextDark fw-bold pt-5">
          <b>Onboard a Dapp in less than 5 mins!</b>
        </h3>
        <p className="fs-6" style={{ color: "#5a5b5b" }}>
          Cutting-edge onboarding solution to eliminate the complexities while onboarding decentralised applications (Dapps).
        </p>
      </div>
      <div className="py-4 pb-5" style={{ maxWidth: "1500px", margin: "auto" }}>
        <div className="row mx-0 px-3 px-md-5 pt-3 d-flex flex-column-reverse flex-md-row">
          <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex align-items-center">
            <div style={{ width: width < 768 ? "100%" : "80%" }}>
              <p className="text-cardDescriptionColor fs-6" style={{ textAlign: "justify", lineHeight: "30px" }}>
                The principal challenges associated with Web3 adoption are a lack of awareness and a widespread lack of understanding of how it works. Users must go through a big learning curve to become acquainted with the different DeFi processes. This is hampering the mass adoption of users to decentralised applications (Dapps).
              </p>
              <p className="text-cardDescriptionColor fs-6 mb-4" style={{ textAlign: "justify", lineHeight: "30px" }}>
                Swidge is a powerful Web3 multi-protocol automation that helps users buy, swap, bridge and transfer tokens from a multichain unified platform to a blockchain game (Play-to-earn) or a decentralised application (Dapp) in just a few clicks.
              </p>
              <UIButton type="primary" width="150px" onMouseOver={() => setButtonText("Coming Soon")} onMouseOut={() => setButtonText("Get Started")}>
                {buttonText}
              </UIButton>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex" style={{ justifyContent: width > 768 ? "end" : "center" }}>
            <div className="">
              <img src="/assets/images/Swidge_01.svg" style={{ width: width > 768 ? "500px" : "80vw" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamersSection;
