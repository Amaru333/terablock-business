import React from "react";
import StartCryptoJourneyCard from "../../../common/Cards/StartCryptoJourneyCard/StartCryptoJourneyCard";
import UIAccordion from "../../../widgets/UIAccordion/UIAccordion";

function CoinsListsFAQ() {
  return (
    <div className="pb-5 position-relative px-0 px-md-2 px-xl-5">
      <div className="text-center mt-5 px-4 px-md-5 mx-0 mx-md-5 pb-3">
        <h3 className="text-primaryTextDark fw-bold">
          <b>
            FAQs<span className="text-primaryViolet">.</span>
          </b>
        </h3>
        <p className="text-primaryTextGray">CoinsList empowers you to see the possibilities of consistent simplified investments and helps you realize your financial goals.</p>
      </div>
      <div className="mx-2 px-2 mx-md-5 px-md-5">
        <UIAccordion index={1} expanded title="Is registration free on TeraBlock?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </UIAccordion>
        <UIAccordion index={2} title="What do we mean by DeFi?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </UIAccordion>
        <UIAccordion index={3} title="How does TeraBlock work?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </UIAccordion>
        <UIAccordion index={4} title="Can I use TeraBlock on my mobile device?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </UIAccordion>
      </div>
      <div className="my-5">
        <StartCryptoJourneyCard />
      </div>
    </div>
  );
}

export default CoinsListsFAQ;
