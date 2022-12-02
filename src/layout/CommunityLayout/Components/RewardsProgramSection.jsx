import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";

function RewardsProgramSection() {
  const width = useScreenSize().width;
  return (
    <div style={{ backgroundColor: "#204ff4" }}>
      <div className="py-4" style={{ maxWidth: "1500px", margin: "auto" }}>
        <div className="text-white text-center mt-5 px-4 px-md-5">
          <h3 className="fw-bold">Rewards Program</h3>
          <p className="mb-0">TeraBlock rewards incentivise the community to acquire, utilise and stake TBC.</p>
          <div className="row d-flex flex-column-reverse flex-md-row mt-5 pb-5">
            <div className="col-12 col-md-6 d-flex flex-column justify-content-around mt-2 mt-md-0 ps-0 ps-md-5">
              <img src="/assets/icons/double-block-quote.svg" style={{ width: width < 768 ? "48px" : "68px", position: "relative", top: width < 768 ? "30px" : "100px", left: width < 768 ? "0px" : "-65px" }} />
              <h4 className="text-center text-md-start mt-md-5">What is TeraBlock Reward?</h4>
              <p className="text-start fw-light mb-md-5">Staking plays an integral part in the growth of the ecosystem and the stability of our native token, TBC. TeraBlock Rewards is a unique program to incentivise the community to stake TBC tokens. Users earn three types of rewards when they stake TBC tokens in TeraBlock's TBC staking pools.</p>
            </div>
            <div className="col-12 col-md-6 d-flex align-self-center justify-content-center justify-content-md-end">
              <img src="/assets/images/rewards/hero.svg" style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RewardsProgramSection;
