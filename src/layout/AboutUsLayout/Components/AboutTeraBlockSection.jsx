import React from "react";
import { getScreenSize } from "../../../functions/getScreenSize";

function AboutTeraBlockSection() {
  const width = getScreenSize().width;
  return (
    <div className="py-5">
      <div className="text-center mb-2 px-3">
        <h3 className="text-primaryTextDark">
          <b>
            About TeraBlock<span className="text-primaryViolet">.</span>
          </b>
        </h3>
        <p className="text-primaryTextGray">Get to know the people and communities pushing the crypto economy forward</p>
      </div>
      <div className="row mx-0 px-2 px-md-5 pt-3 d-flex flex-column-reverse flex-md-row">
        <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex align-items-center">
          <div>
            <p className="text-primaryTextDark fs-4 text-center text-md-start">What is TeraBlock?</p>
            <p className="text-cardDescriptionColor fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <p className="text-cardDescriptionColor fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div>
            <img src="./assets/images/about-terablock.png" className={`shadow rounded ${width < 768 && "w-100"}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTeraBlockSection;
