import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UICard from "../../../widgets/UICard/UICard";

//TODO: change png to svg

function FeaturesSection() {
  const width = useScreenSize().width;
  return (
    <div className="py-5" style={{ backgroundColor: "#f5f6fa" }}>
      <div className="py-4" style={{ maxWidth: "1320px", margin: "auto" }}>
        <div className="text-center mt-5">
          <h3 className="text-primaryTextDark fw-bold pt-5">
            <b>Wiser investments today for a better tomorrow</b>
          </h3>
          <p className="text-primaryTextGray">Start today on a simplified, optimised, decentralised platform; we're here to help you invest wisely in the crypto ecosystem.</p>
        </div>
        <div className="row mx-0 px-2 px-md-0 mt-5 position-relative justify-content-center">
          <div className="col-sm-4 col-xl-4">
            <UICard>
              <div className="text-center text-md-start p-2">
                <img src="/assets/images/simplified-logo.svg" className="bg-cardImageBg border border-2 border-cardImageBorder p-3 rounded" style={{ "--bs-border-opacity": 0.2 }} />
                <h4 className="text-primaryBlue mt-3">Simplified</h4>
                <p className="text-cardDescriptionColor">Designed to provide an exceedingly simple user journey, the TeraBlock ecosystem can be used by everyone regardless of knowledge and skill level.</p>
                <p className="text-cardDescriptionColor">{/* Get started with as little as <span className="text-primaryBlue fw-bolder">$100.</span> */}</p>
              </div>
            </UICard>
          </div>
          <div className="col-sm-4 col-xl-4">
            <UICard>
              <div className="text-center text-md-start p-2">
                <img src="/assets/images/optimised-logo.svg" className="bg-cardImageBg border border-2 border-cardImageBorder p-3 rounded" style={{ "--bs-border-opacity": 0.2 }} />
                <h4 className="text-primaryBlue mt-3">Optimised</h4>
                <p className="text-cardDescriptionColor">We curate and optimise the most sought after crypto assets as CoinLists, so you can wisely invest in a range of crypto with ease.</p>
                <p className="text-cardDescriptionColor">{/* Get started with as little as <span className="text-primaryBlue fw-bolder">$100.</span> */}</p>
              </div>
            </UICard>
          </div>
          <div className="col-sm-4 col-xl-4">
            <UICard>
              <div className="text-center text-md-start p-2">
                <img src="/assets/images/decentralised-logo.svg" className="bg-cardImageBg border border-2 border-cardImageBorder p-3 rounded" style={{ "--bs-border-opacity": 0.2 }} />
                <h4 className="text-primaryBlue mt-3">Decentralised</h4>
                <p className="text-cardDescriptionColor">TeraBlock platform is truly decentralised. You have complete custody of your funds at all times. We simply help you effectively manage your crypto wisely.</p>
                <p className="text-cardDescriptionColor">{/* Get started with as little as <span className="text-primaryBlue fw-bolder">$100.</span> */}</p>
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
