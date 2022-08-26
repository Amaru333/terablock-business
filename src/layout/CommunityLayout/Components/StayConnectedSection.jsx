import React from "react";
import CardWithLogo from "../../../common/Cards/CardWithLogo";
import { useScreenSize } from "../../../functions/useScreenSize";

function StayConnectedSection() {
  const width = useScreenSize().width;
  return (
    <div className="bg-white py-5">
      <div className="text-center mt-5 px-4 px-md-5">
        <h3 className="text-primaryTextDark fw-bold">
          <b>
            Let&apos;s stay connected<span className="text-primaryViolet">.</span>
          </b>
        </h3>
        <p className="text-primaryTextGray">Get to know the people and communities pushing the crypto economy forward</p>
      </div>
      <div className="row mx-4 mx-md-5 mt-5 position-relative">
        <div className="col-12 col-md-4">
          <CardWithLogo image="./assets/icons/discussion.svg" title="Be a part of our discussion">
            Follow simple step by step process to create a new Web3 wallet or connect an existing wallet.
          </CardWithLogo>
        </div>
        <div className="col-12 col-md-4">
          <CardWithLogo image="./assets/icons/updated.svg" title="Stay updated with us">
            Follow simple step by step process to create a new Web3 wallet or connect an existing wallet.
          </CardWithLogo>
        </div>
        <div className="col-12 col-md-4">
          <CardWithLogo image="./assets/icons/stay-connected.svg" title="Build with us">
            Follow simple step by step process to create a new Web3 wallet or connect an existing wallet.
          </CardWithLogo>
        </div>
        {width > 768 && <img src="./assets/icons/4x5.svg" style={{ width: "50px", position: "absolute", bottom: "2rem", left: "0.5rem" }} />}
      </div>
    </div>
  );
}

export default StayConnectedSection;
