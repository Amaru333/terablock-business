import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UICard from "../../../widgets/UICard/UICard";

function FeaturesSection() {
  const width = useScreenSize().width;
  return (
    <div className="py-5" style={{ backgroundColor: "#f5f6fa" }}>
      <div className="pb-sm-5 pb-md-4 pt-4 pt-sm-3" style={{ maxWidth: "800px", margin: "auto", width: width > 1499 ? "70%" : width > 940 ? "80%" : "95%" }}>
        <div className="text-center mt-0">
          <h2 className="text-primaryTextDark fw-bold pt-0 pt-xl-3">
            <b>Accelerating Your Defi Journey with Cost-Effective and Time-Saving Solutions</b>
          </h2>
        </div>
      </div>
      <div className="pb-4 pb-sm-5 pb-md-4 pt-4 pt-sm-0" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : width > 940 ? "80%" : "100%" }}>
        <div className="row mx-0 px-2 px-md-0 mt-0 position-relative justify-content-center">
          <div className="col-sm-4 col-xl-4">
            <UICard>
              <div className="text-center text-md-start">
                <img src="/assets/images/decentralised-logo.svg" className="border border-2 border-cardImageBorder p-3 rounded" style={{ "--bs-border-opacity": 0.2 }} />
                <h4 className="text-primaryBlue mt-3 fw-semibold">Plug-and-Play DeFi Protocol</h4>
                <p className="text-cardDescriptionColor" style={{ textAlign: "justify" }}>
                  Launch DeFi services with our secure and customisable pre-built protocols.
                </p>
                <p className="text-cardDescriptionColor" style={{ textAlign: "justify" }}>
                  {/* Get started with as little as <span className="text-primaryBlue fw-bolder">$100.</span> */}
                </p>
              </div>
            </UICard>
          </div>
          <div className="col-sm-4 col-xl-4">
            <UICard>
              <div className="text-center text-md-start">
                <img src="/assets/images/decentralised-logo.svg" className="border border-2 border-cardImageBorder p-3 rounded" style={{ "--bs-border-opacity": 0.2 }} />
                <h4 className="text-primaryBlue mt-3 fw-semibold">Global User Onboarding</h4>
                <p className="text-cardDescriptionColor" style={{ textAlign: "justify" }}>
                  Boost your global multi-chain user adoption strategy with our 1-click cross-chain swap and fiat to crypto on-ramp
                </p>
                <p className="text-cardDescriptionColor" style={{ textAlign: "justify" }}>
                  {/* Get started with as little as <span className="text-primaryBlue fw-bolder">$100.</span> */}
                </p>
              </div>
            </UICard>
          </div>
          <div className="col-sm-4 col-xl-4">
            <UICard>
              <div className="text-center text-md-start">
                <img src="/assets/images/decentralised-logo.svg" className="border border-2 border-cardImageBorder p-3 rounded" style={{ "--bs-border-opacity": 0.2 }} />
                <h4 className="text-primaryBlue mt-3 fw-semibold">Assistance and Support</h4>
                <p className="text-cardDescriptionColor" style={{ textAlign: "justify" }}>
                  We're here to help every step of the way as you navigate the DeFi landscape
                </p>
                <p className="text-cardDescriptionColor" style={{ textAlign: "justify" }}>
                  {/* Get started with as little as <span className="text-primaryBlue fw-bolder">$100.</span> */}
                </p>
              </div>
            </UICard>
          </div>
          {width > 768 && <img src="/assets/icons/4x5.svg" style={{ width: "60px", position: "absolute", bottom: "2rem", left: "3rem" }} />}
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
