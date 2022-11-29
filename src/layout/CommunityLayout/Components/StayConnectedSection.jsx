import React from "react";
import CardWithLogo from "../../../common/Cards/CardWithLogo";
import { useScreenSize } from "../../../functions/useScreenSize";

function StayConnectedSection() {
  const width = useScreenSize().width;
  return (
    <div className="bg-white py-5">
      <div className="py-4" style={{ maxWidth: "1500px", margin: "auto" }}>
        <div className="text-center mt-5 px-4 px-md-5">
          <h3 className="fw-bold" style={{ color: "rgb(27, 43, 107)" }}>
            <b>Be a part of Cryptocurrency revolution</b>
          </h3>
          <p className="text-primaryTextGray">DeFi gives you the freedom and complete control over your finances, join our journey and be a part of this revolution.</p>
        </div>
        <div className="row mx-4 mx-md-5 mt-5 position-relative">
          <div className="col-12 col-md-4">
            <CardWithLogo image="/assets/icons/discussion.svg" title="Be a part of the future">
              At TeraBlock, we are revolutionising how people interact with DeFi by building the most innovative yet simple, unified and decentralised platform.
            </CardWithLogo>
          </div>
          <div className="col-12 col-md-4">
            <CardWithLogo image="/assets/icons/updated.svg" title="Join global community">
              TeraBlock strives to create transparent and non-exclusive channels of communication to encourage discussions. Be a part of our journey.
            </CardWithLogo>
          </div>
          <div className="col-12 col-md-4">
            <CardWithLogo image="/assets/icons/stay-connected.svg" title="Stay updated">
              Follow our social media channels to stay updated about the latest developments, market trends, best practices, learn about basic concepts of Blockchain and more.
            </CardWithLogo>
          </div>
          {width > 768 && <img src="/assets/icons/4x5.svg" style={{ width: "50px", position: "absolute", bottom: "2rem", left: "0.5rem" }} />}
        </div>
      </div>
    </div>
  );
}

export default StayConnectedSection;
