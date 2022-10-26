import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";

function RewardsProgramSection() {
  const width = useScreenSize().width;
  return (
    <div>
      <div className="py-4" style={{ maxWidth: "1500px", margin: "auto" }}>
        <div className="text-center mt-5 px-4 px-md-5">
          <h3 className="text-primaryTextDark fw-bold">
            <b>
              Rewards Program<span className="text-primaryViolet">.</span>
            </b>
          </h3>
          <p className="text-primaryTextGray mb-0">TeraBlock wants to provide users with simple ways to earn crypto through rewards.</p>
          <p className="text-primaryTextGray">We believe that one shouldn&apos;t have to be a seasoned crypto trader to grow their portfolio.</p>
          <div className="row d-flex flex-column-reverse flex-md-row mt-5 pb-5">
            <div className="col-12 col-md-6 d-flex flex-column justify-content-around mt-2 mt-md-0 ps-0 ps-md-5">
              <img src="/assets/icons/double-block-quote.svg" style={{ width: width < 768 ? "48px" : "68px", position: "relative", top: width < 768 ? "30px" : "100px", left: width < 768 ? "0px" : "-65px" }} />
              <h4 className="text-center text-md-start text-primaryTextDark mt-md-5">What is TeraBlock Reward?</h4>
              <p className="text-primaryTextGray text-start">The users stand to earn rewards in addition to the APR (annual percentage return) accrued from staking their holdings in TeraBlock&apos;s TBC Staking pools. TeraBlock offers multiple rewards to incentivize community members to acquire and retain TBC.</p>
              <p className="text-primaryTextGray text-start mb-md-5">TeraBlock will reward its users for staking TBC tokens by giving a minimum 30% APR, redistributing 25% of the total transaction fees collected on its ecosystem and providing upto 40% discount on transaction fees throughout the TeraBlock ecosystem.</p>
            </div>
            <div className="col-12 col-md-6 d-flex align-self-center justify-content-center">
              <img src="/assets/images/rewards.png" style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RewardsProgramSection;
