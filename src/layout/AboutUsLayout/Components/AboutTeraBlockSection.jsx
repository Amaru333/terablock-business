import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";

function AboutTeraBlockSection() {
  const width = useScreenSize().width;
  return (
    <div className="py-5 px-0 px-md-2 px-xl-5 bg-white">
      <div className="text-center mb-2 px-3">
        <h2 className="text-primaryTextDark fw-bold">
          <b>
            About TeraBlock<span className="text-primaryViolet">.</span>
          </b>
        </h2>
        <p className="text-primaryTextGray fs-6">Get to know the people and communities pushing the crypto economy forward</p>
      </div>
      <div className="row mx-0 px-3 px-md-5 pt-3 d-flex flex-column-reverse flex-md-row">
        <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex align-items-center">
          <div>
            <p className="text-primaryTextDark fs-4 text-center text-md-start fw-bold">What is TeraBlock?</p>
            <p className="text-cardDescriptionColor fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <p className="text-cardDescriptionColor fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div>
            <img src="/assets/images/about-terablock.png" className={`shadow rounded`} style={{ maxWidth: width > 768 ? "40vw" : "80vw", objectFit: "contain" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTeraBlockSection;
