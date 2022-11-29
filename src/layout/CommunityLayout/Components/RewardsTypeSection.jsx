import React from "react";
import CardWithLogo from "../../../common/Cards/CardWithLogo";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";

function RewardsTypeSection() {
  const width = useScreenSize().width;
  return (
    <div className="pb-5">
      <div className="py-4" style={{ maxWidth: "1500px", margin: "auto" }}>
        <div className="text-center mt-5 px-4 px-md-5">
          <h4 className="text-primaryTextDark fw-bold">Types of Rewards</h4>
          <p className="text-primaryTextGray">Here are the different types of rewards we are offering under TeraBlock Rewards program</p>
        </div>
        <div className="row mx-4 mx-md-0 mx-xl-5 mt-5 position-relative">
          <div className="col-12 col-md-4">
            <CardWithLogo image="/assets/icons/percent.svg" title="Save on fees">
              Avail discounts as high as 40% on transaction fees across the TeraBlock ecosystem. Fee discount percentage is based on the total amount of TBC staked.
            </CardWithLogo>
          </div>
          <div className="col-12 col-md-4">
            <CardWithLogo image="/assets/icons/money-bag-outline.svg" title="Payback rewards">
              Earn rewards in the form of TBC tokens. A percentage of the fees collected on the TeraBlock ecosystem is distributed amongst TBC stakers as payback rewards.
            </CardWithLogo>
          </div>
          <div className="col-12 col-md-4">
            <CardWithLogo image="/assets/icons/wallet.svg" title="Exclusive access">
              Get exclusive access to our upcoming innovative products, events and more with TeraBlock Rewards.
            </CardWithLogo>
          </div>
          {width > 768 && <img src="/assets/icons/4x5.svg" style={{ width: "50px", position: "absolute", bottom: "2rem", left: "0.5rem" }} />}
        </div>
        <div className="d-flex flex-row justify-content-center">
          <UIButton type="primary">Get Started</UIButton>
          <UIButton type="secondary">Learn More</UIButton>
        </div>
      </div>
    </div>
  );
}

export default RewardsTypeSection;
