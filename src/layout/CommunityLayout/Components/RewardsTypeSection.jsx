import React, { useState } from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";
import UICard from "../../../widgets/UICard/UICard";

function RewardsTypeSection() {
  const width = useScreenSize().width;
  const [buttonText, setButtonText] = useState("Get Started");
  const CardWithLogo = ({ children, title, image }) => {
    return (
      <UICard>
        <div className="text-center text-md-start p-0 p-xl-3">
          <img src={image} style={{ width: "60px" }} />
          <div className="d-flex justify-content-center justify-content-md-start">
            <h4 className="mt-3 fw-bold" style={{ color: "#0251ff" }}>
              {title}
            </h4>
          </div>
          <div className="text-cardDescriptionColor d-flex" style={{ color: "#5a5b5b", textAlign: "justify" }}>
            {children}
          </div>
        </div>
      </UICard>
    );
  };
  return (
    <div className="pb-5">
      <div className="py-4" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : width > 940 ? "83%" : "96%" }}>
        <div className="text-center mt-5 px-4 px-md-5">
          <h4 className="text-primaryTextDark fw-bold">
            <b>Types of Rewards</b>
          </h4>
          <p className="text-primaryTextGray">Here are the different types of rewards we are offering under TeraBlock Rewards program</p>
        </div>
        <div className="row mx-4 mx-md-0 mx-xl-0 mt-5 position-relative">
          <div className="col-12 col-md-4">
            <CardWithLogo image="/assets/icons/rewards/4.png" title="Save on fees">
              Avail discounts as high as 40% on transaction fees across the TeraBlock ecosystem. Fee discount percentage is based on the total amount of TBC staked.
            </CardWithLogo>
          </div>
          <div className="col-12 col-md-4">
            <CardWithLogo image="/assets/icons/rewards/5.png" title="Payback rewards">
              Earn rewards in the form of TBC tokens. A percentage of the fees collected on the TeraBlock ecosystem is distributed amongst TBC stakers as payback rewards.
            </CardWithLogo>
          </div>
          <div className="col-12 col-md-4">
            <CardWithLogo image="/assets/icons/rewards/6.png" title="Exclusive access">
              Get exclusive access to our upcoming innovative products, events and more with TeraBlock Rewards.
            </CardWithLogo>
          </div>
          {/* {width > 768 && <img src="/assets/icons/4x5.svg" style={{ width: "50px", position: "absolute", bottom: "2rem", left: "0.5rem" }} />} */}
        </div>
        <div className="d-flex flex-row justify-content-center mt-4">
          <UIButton type="primary" width="150px" onMouseOver={() => setButtonText("Coming Soon")} onMouseOut={() => setButtonText("Get Started")}>
            {buttonText}
          </UIButton>
          <UIButton type="secondary">Learn More</UIButton>
        </div>
      </div>
    </div>
  );
}

export default RewardsTypeSection;
