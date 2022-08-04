import React from "react";
import UIAccordion from "../../../widgets/UIAccordion/UIAccordion";

function FAQSection() {
  return (
    <div>
      <div className="text-center mt-5 px-4 px-md-5 mx-0 mx-md-5 pb-5">
        <h3 className="text-primaryTextDark">
          <b>
            FAQs<span className="text-primaryViolet">.</span>
          </b>
        </h3>
        <p className="text-primaryTextGray">Got some queries? We got you covered</p>
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
    </div>
  );
}

export default FAQSection;
