import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";

function FounderMessageSection() {
  const width = useScreenSize().width;
  return (
    <div className="py-5 px-0 px-md-2 px-xl-5">
      <div className="text-center mb-2 px-3">
        <h3 className="text-primaryTextDark">
          <b>
            Message from founder<span className="text-primaryViolet">.</span>
          </b>
        </h3>
        <p className="text-primaryTextGray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>
      <div className="row mx-0 px-3 py-3">
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div className="position-relative">
            <img src="./assets/images/founder-image.png" className="rounded shadow w-100" />
            {width < 768 && <img src="./assets/icons/4x5.svg" className="position-absolute" style={{ bottom: "-1rem", left: "-1rem" }} />}
          </div>
        </div>
        <div className="col-12 col-md-8 d-flex flex-column-reverse flex-md-column justify-content-center px-2 px-md-0 pe-md-5">
          <div className="position-relative">
            <p className="text-cardDescriptionColor" style={{ width: width > 768 ? "80%" : "100%" }}>
              <i>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </i>
            </p>

            <img src="./assets/icons/block-double-quote-close.svg" className="position-absolute" style={{ top: width > 768 ? "-15px" : "-10px", right: width > 768 ? "15%" : "-1rem", width: width > 768 ? "54px" : "32px" }} />
          </div>
          <div className="text-center text-md-start py-4 py-md-0">
            <p className="text-cardDescriptionColor">
              - <span className="fw-bolder">Shivam Tandon,</span> Founder
            </p>
            <div>
              <img src="./assets/icons/twitter-ico-filled.svg" />
              &nbsp;&nbsp;
              <img src="./assets/icons/linkedin-ico-filled.svg" />
              &nbsp;&nbsp;
              <img src="./assets/icons/mail-ico-filled.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FounderMessageSection;
