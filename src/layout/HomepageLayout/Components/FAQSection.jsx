import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIAccordion from "../../../widgets/UIAccordion/UIAccordion";

function FAQSection() {
  const width = useScreenSize().width;
  return (
    <div className="pb-5 position-relative" style={{ backgroundColor: "#0251ff" }}>
      <div className="text-center pt-5 px-4 px-md-5 mx-0 mx-md-5 pb-3">
        <h3 className="text-white fw-bold">
          <b>Frequently asked questions</b>
        </h3>
      </div>
      <div className="mx-2 px-2 mx-md-5 px-md-5">
        <UIAccordion index={1} expanded title="Is registration free on TeraBlock?" homepage>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </UIAccordion>
        <UIAccordion index={2} title="What do we mean by DeFi?" homepage>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </UIAccordion>
        <UIAccordion index={3} title="How does TeraBlock work?" homepage>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </UIAccordion>
        <UIAccordion index={4} title="Can I use TeraBlock on my mobile device?" homepage>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </UIAccordion>
      </div>
      {width > 768 && (
        <>
          <img src="./assets/icons/4x4-blue.svg" style={{ width: "40px", position: "absolute", top: "10rem", left: "0rem" }} />
          <img src="./assets/icons/6x4-pink.svg" style={{ width: "40px", position: "absolute", bottom: "2rem", right: "0rem" }} />
        </>
      )}
    </div>
  );
}

export default FAQSection;
