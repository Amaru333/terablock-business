import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UICard from "../../../widgets/UICard/UICard";

function StayConnectedSection() {
  const width = useScreenSize().width;
  const CardWithLogo = ({ children, title, image }) => {
    return (
      <UICard>
        <div style={{ textAlign: "justify" }}>
          <img src={image} style={{ width: "56px" }} />
          <div className="d-flex justify-content-center justify-content-md-start">
            <h4 className="mt-3 fw-bold" style={{ color: "#0251ff" }}>
              {title}
            </h4>
          </div>
          <div className="text-cardDescriptionColor d-flex" style={{ color: "#5a5b5b" }}>
            {children}
          </div>
        </div>
      </UICard>
    );
  };

  return (
    <div className="bg-white pb-5 pt-0 pt-md-5">
      <div className="py-4" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : width > 940 ? "83%" : "98%" }}>
        <div className="text-center px-4 px-md-0">
          <h2 className="fw-bold" style={{ color: "rgb(27, 43, 107)" }}>
            <b>Be a part of Cryptocurrency revolution</b>
          </h2>
          <p className="text-primaryTextGray">DeFi gives you the freedom and complete control over your finances, join our journey and be a part of this revolution.</p>
        </div>
        <div className="row mx-4 mx-md-3 mx-xxl-0 mt-5 position-relative">
          <div className="col-12 col-md-4">
            <CardWithLogo image="/assets/icons/rewards/1.png" title="Be a part of the future">
              At TeraBlock, we are revolutionising how people interact with DeFi by building the most innovative yet simple, unified and decentralised platform.
            </CardWithLogo>
          </div>
          <div className="col-12 col-md-4">
            <CardWithLogo image="/assets/icons/rewards/2.png" title="Join global community">
              TeraBlock strives to create transparent and non-exclusive channels of communication to encourage discussions. Be a part of our journey.
            </CardWithLogo>
          </div>
          <div className="col-12 col-md-4">
            <CardWithLogo image="/assets/icons/rewards/3.png" title="Stay updated">
              Follow our social media channels to stay updated about the latest developments, market trends, best practices, learn about basic concepts of Blockchain and more.
            </CardWithLogo>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StayConnectedSection;
