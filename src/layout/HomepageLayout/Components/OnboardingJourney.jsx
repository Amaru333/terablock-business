import React, { useState } from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";
import UICard from "../../../widgets/UICard/UICard";

function OnboardingJourney() {
  const width = useScreenSize().width;
  const [buttonText, setButtonText] = useState("Get Started");
  const DescriptionCard = ({ image, title, description }) => {
    return (
      <>
        <img src={image} style={{ width: "42px" }} className="bg-white rounded p-2" />
        <h5 className="text-white mt-3">{title}</h5>
        <p className="text-white fw-lighter">{description}</p>
      </>
    );
  };
  const openNewTab = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="py-5" style={{ backgroundColor: "#0251ff" }}>
      <div className="text-center pt-5 px-4 px-md-5">
        <h2 className="text-white fw-bold m-auto" style={{ maxWidth: "900px" }}>
          Supercharge Your Web3 User Onboarding Journey With Cutting-Edge Infrastructure
        </h2>
      </div>
      <div className="py-4" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "71%" : width > 940 ? "84%" : "96%" }}>
        <div className="row mx-3 mx-md-0 mt-5 position-relative">
          <div className="col-12 col-md-4 px-3 px-md-0 px-xl-3">
            <UICard>
              <div className="d-flex flex-row justify-content-center justify-content-md-between align-items-center">
                <div>
                  <img src="/assets/images/decentralised-logo.svg" className="border border-2 border-cardImageBorder p-3 rounded" style={{ "--bs-border-opacity": 0.2 }} />
                </div>
              </div>
              <p className="fs-4 fw-bolder text-primaryBlue mt-2 text-center text-md-start">Multi-Chain</p>
              <p className="fs-6 text-primaryTextGray" style={{ textAlign: "justify" }}>
                Seamlessly connect your dApp to all the Blockchain Networks and DEXs.
              </p>
            </UICard>
          </div>
          <div className="col-12 col-md-4 px-3 px-md-0 px-xl-3">
            <UICard>
              <div className="d-flex flex-row justify-content-center justify-content-md-between align-items-center">
                <div>
                  <img src="/assets/images/decentralised-logo.svg" className="border border-2 border-cardImageBorder p-3 rounded" style={{ "--bs-border-opacity": 0.2 }} />
                </div>
              </div>
              <p className="fs-4 fw-bolder text-primaryBlue mt-2 text-center text-md-start">Automation</p>
              <p className="fs-6 text-primaryTextGray" style={{ textAlign: "justify" }}>
                Powerful multi-protocol automation to eliminate complexities while onboarding dApps.
              </p>
            </UICard>
          </div>
          <div className="col-12 col-md-4 px-3 px-md-0 px-xl-3">
            <UICard>
              <div className="d-flex flex-row justify-content-center justify-content-md-between align-items-center">
                <div>
                  <img src="/assets/images/decentralised-logo.svg" className="border border-2 border-cardImageBorder p-3 rounded" style={{ "--bs-border-opacity": 0.2 }} />
                </div>
              </div>
              <p className="fs-4 fw-bolder text-primaryBlue mt-2 text-center text-md-start">Non-Custodial</p>
              <p className="fs-6 text-primaryTextGray" style={{ textAlign: "justify" }}>
                Users have complete control over their digital assets, ensuring security and ownership.
              </p>
            </UICard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardingJourney;
