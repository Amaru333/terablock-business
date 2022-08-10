import React from "react";
import { getScreenSize } from "../../../functions/getScreenSize";
import UICard from "../../../widgets/UICard/UICard";

function FeaturesSection() {
  const width = getScreenSize().width;
  return (
    <div>
      <div className="text-center mt-5 px-4 px-md-5">
        <h3 className="text-primaryTextDark">
          <b>
            Investing built for a better future<span className="text-primaryViolet">.</span>
          </b>
        </h3>
        <p className="text-primaryTextGray">Whether you're starting with $100 or $100 million, we're here to help you better invest in cryptocurrencies.</p>
      </div>
      <div className="row mx-5 mx-sm-0 px-0 px-md-1 px-xl-5 mt-5 position-relative">
        <div className="col-md-4">
          <UICard>
            <div className="text-center text-md-start">
              <img src="./assets/images/simplified-logo.png" className="bg-cardImageBg border border-2 border-cardImageBorder p-3 rounded" style={{ "--bs-border-opacity": 0.2 }} />
              <h4 className="text-primaryBlue mt-3">Simplified</h4>
              <p className="text-cardDescriptionColor">The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.</p>
              <p className="text-cardDescriptionColor">
                Get started with as little as <span className="text-primaryBlue fw-bolder">$100.</span>
              </p>
            </div>
          </UICard>
        </div>
        <div className="col-md-4">
          <UICard>
            <div className="text-center text-md-start">
              <img src="./assets/images/optimised-logo.png" className="bg-cardImageBg border border-2 border-cardImageBorder p-3 rounded" style={{ "--bs-border-opacity": 0.2 }} />
              <h4 className="text-primaryBlue mt-3">Optimised</h4>
              <p className="text-cardDescriptionColor">The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.</p>
              <p className="text-cardDescriptionColor">
                Get started with as little as <span className="text-primaryBlue fw-bolder">$100.</span>
              </p>
            </div>
          </UICard>
        </div>
        <div className="col-md-4">
          <UICard>
            <div className="text-center text-md-start">
              <img src="./assets/images/decentralized-logo.png" className="bg-cardImageBg border border-2 border-cardImageBorder p-3 rounded" style={{ "--bs-border-opacity": 0.2 }} />
              <h4 className="text-primaryBlue mt-3">Decentralised</h4>
              <p className="text-cardDescriptionColor">The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.</p>
              <p className="text-cardDescriptionColor">
                Get started with as little as <span className="text-primaryBlue fw-bolder">$100.</span>
              </p>
            </div>
          </UICard>
        </div>
        {width > 768 && <img src="./assets/icons/4x5.svg" style={{ width: "60px", position: "absolute", bottom: "2rem", left: "3rem" }} />}
      </div>
    </div>
  );
}

export default FeaturesSection;
