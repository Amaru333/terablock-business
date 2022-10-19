import React from "react";
import StartCryptoJourneyCard from "../../../common/Cards/StartCryptoJourneyCard/StartCryptoJourneyCard";
import UIAccordion from "../../../widgets/UIAccordion/UIAccordion";
import UIButton from "../../../widgets/UIButtons/UIButton";

function CoinsListsFAQ() {
  return (
    <div className="pb-5 position-relative px-0 px-md-2 px-xl-5" style={{ backgroundColor: "#0251ff" }}>
      <div className="py-4" style={{ maxWidth: "1500px", margin: "auto" }}>
        <div className="text-center pt-5 px-4 px-md-5 mx-0 mx-md-5 pb-3">
          <h3 className="text-white fw-bold">
            <b>Frequently asked questions</b>
          </h3>
        </div>
        <div className="mx-2 px-2 mx-md-5 px-md-5">
          <UIAccordion index={1} expanded title="Can I buy CoinsList as Systematic Investment Plan (SIP)?" homepage>
            In a CoinsList, you can purchase and begin a SIP with only one click. While purchasing the CoinsList, you will notice a button to begin SIP. On the due date, we'll give you a platform-based notification and an email as a reminder; all you have to do is confirm your payment, and you're done. SIP prices begin at only $100!
          </UIAccordion>
          <UIAccordion index={2} title="What is rebalancing?" homepage>
            Rebalancing is the process of checking a CoinsList's cryptocurrency holdings to make sure it still reflects the underlying original concept. In order to unbiasedy select the most appropriate cryptocurrencies, it takes into account fundamental variables, business updates, etc.
            <br />
            <br />
            According to its schedule, the CoinsList research team performs rebalancing. You will receive an email when a CoinsList you invested in has a rebalance update; it is not an automatic procedure. In two clicks, you can check the changes and make the update.
          </UIAccordion>
          <UIAccordion index={3} title="What are TeraBlock Community Rewards?" homepage>
            Community Rewards is a unique program to incentivise our community to acquire and retain TBC tokens in TeraBlock staking pools.
            <br />
            <br />
            <b>Fees discount</b>
            <br />
            Get upto 40% discounts on transaction fees across the TeraBlock ecosystem.
            <br />
            <br />
            <b>Payback Rewards</b>
            <br />
            Earn payback rewards through TBC tokens distributed from the fees collected from the TeraBlock ecosystem.
            <br />
            <br />
            <div>
              <UIButton>Earn Rewards</UIButton>
              <UIButton type="primary-light">Learn More</UIButton>
            </div>
          </UIAccordion>
        </div>
        {/* <div className="my-5">
        <StartCryptoJourneyCard />
      </div> */}
      </div>
    </div>
  );
}

export default CoinsListsFAQ;
