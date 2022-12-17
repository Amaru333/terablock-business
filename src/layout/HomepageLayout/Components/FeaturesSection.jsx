import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UICard from "../../../widgets/UICard/UICard";

//TODO: change png to svg

function FeaturesSection() {
  const width = useScreenSize().width;
  return (
    <div className="py-5" style={{ backgroundColor: "#f5f6fa" }}>
      <div className="pb-sm-5 pb-md-4 pt-4 pt-sm-3" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : width > 940 ? "80%" : "95%" }}>
        <div className="text-center mt-0">
          <h2 className="text-primaryTextDark fw-bold pt-0 pt-xl-3">
            <b>Wiser investments today for a better tomorrow</b>
          </h2>
          <p className="text-primaryTextGray">Start today on a simplified, optimised, decentralised platform; we're here to help you invest wisely in the crypto ecosystem.</p>
        </div>
      </div>
      <div className="pb-4 pb-sm-5 pb-md-4 pt-4 pt-sm-0" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : width > 940 ? "80%" : "100%" }}>
        <div className="row mx-0 px-2 px-md-0 mt-0 position-relative justify-content-center">
          <div className="col-sm-4 col-xl-4">
            <UICard>
              <div className="text-center text-md-start">
                <img src="/assets/images/simplified-logo.svg" className="bg-cardImageBg border border-2 border-cardImageBorder p-3 rounded" style={{ "--bs-border-opacity": 0.2 }} />
                <h4 className="text-primaryBlue mt-3">Simplified</h4>
                <p className="text-cardDescriptionColor" style={{ textAlign: "justify" }}>
                  Designed to provide an exceedingly simple user journey, the TeraBlock ecosystem can be used by everyone regardless of knowledge and skill level.
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
                <img src="/assets/images/optimised-logo.svg" className="bg-cardImageBg border border-2 border-cardImageBorder p-3 rounded" style={{ "--bs-border-opacity": 0.2 }} />
                <h4 className="text-primaryBlue mt-3">Optimised</h4>
                <p className="text-cardDescriptionColor" style={{ textAlign: "justify" }}>
                  We curate and optimise the most sought after crypto assets as CoinLists, so you can wisely invest in a range of crypto with ease.
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
                <img src="/assets/images/decentralised-logo.svg" className="bg-cardImageBg border border-2 border-cardImageBorder p-3 rounded" style={{ "--bs-border-opacity": 0.2 }} />
                <h4 className="text-primaryBlue mt-3">Decentralised</h4>
                <p className="text-cardDescriptionColor" style={{ textAlign: "justify" }}>
                  TeraBlock platform is truly decentralised. You have complete custody of your funds at all times. We simply help you effectively manage your crypto wisely.
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
