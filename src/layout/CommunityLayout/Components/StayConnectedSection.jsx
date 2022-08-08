import React from "react";
import CardWithLogo from "../../../common/Cards/CardWithLogo";

function StayConnectedSection() {
  return (
    <div className="bg-white py-5">
      <div className="text-center mt-5 px-4 px-md-5">
        <h3 className="text-primaryTextDark">
          <b>
            Let's stay connected<span className="text-primaryViolet">.</span>
          </b>
        </h3>
        <p className="text-primaryTextGray">Get to know the people and communities pushing the crypto economy forward</p>
      </div>
      <div className="row mx-4 mx-md-5 mt-5">
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
      </div>
    </div>
  );
}

export default StayConnectedSection;
