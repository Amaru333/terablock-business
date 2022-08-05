import React from "react";
import CardWithLogo from "../../../common/Cards/CardWithLogo";
import UIButton from "../../../widgets/UIButtons/UIButton";

function RewardsTypeSection() {
  return (
    <div className="pb-5">
      <div className="text-center mt-5 px-4 px-md-5">
        <h4 className="text-primaryTextDark">Types of Rewards</h4>
        <p className="text-primaryTextGray mb-0">TeraBlock Rewards incentivize users to acquire and hold TBC.</p>
        <p className="text-primaryTextGray">Here are the different types of rewards available for users participating in TeraBlock's staking:</p>
      </div>
      <div className="row mx-4 mx-md-5 mt-5">
        <div className="col-12 col-md-4">
          <CardWithLogo image="./assets/icons/percent.svg" title="Earn Interest">
            Earn a minimum 30% APR on TBC Staking Pools under the TeraBlock Earn protocol.
          </CardWithLogo>
        </div>
        <div className="col-12 col-md-4">
          <CardWithLogo image="./assets/icons/money-bag-outline.svg" title="Earn Passive Income">
            TeraBlock will provide discounts as high as 40% on transaction fees across the TeraBlock ecosystem.
          </CardWithLogo>
        </div>
        <div className="col-12 col-md-4">
          <CardWithLogo image="./assets/icons/wallet.svg" title="Save on Fees">
            25% of the total fees collected on the TeraBlock ecosystem will be distributed among TeraBlock stakers as loyalty rewards.
          </CardWithLogo>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center">
        <UIButton type="primary">Apply Now</UIButton>
        <UIButton type="secondary">View Guide</UIButton>
      </div>
    </div>
  );
}

export default RewardsTypeSection;
