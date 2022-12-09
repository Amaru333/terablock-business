import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UISearchBar from "../../../widgets/UISearchBar/UISearchBar";

import HelpCenterHeaderStyle from "../Styles/HelpCenterHeader.module.css";

import HeroAnimation1 from "../animations/hero_1.json";
import UILottie from "../../../common/Lottie/UILottie";

function HelpCenterHeader() {
  const width = useScreenSize().width;
  return (
    <div className={["px-2 px-md-5 py-5", HelpCenterHeaderStyle.body_font].join(" ")}>
      <div className="py-4" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : "83%" }}>
        <div className="px-0 px-md-2 px-xl-5">
          <div className="row mx-0 d-flex flex-column-reverse flex-md-row">
            <div className="col-12 col-md-7 d-flex flex-column justify-content-center align-items-center align-items-md-start">
              <h1 className="text-fontDark mb-4 mb-md-3 mt-4 mt-md-0" style={{ fontSize: width > 1199 ? "58px" : width > 767 ? "40px" : "24px" }}>
                How can we help you ?
              </h1>
              <UISearchBar placeholder="Search your issue here" maxWidth="580px" />
              {width < 769 && (
                <>
                  <button className="bg-primaryBlue text-white py-3 mt-3 rounded" style={{ border: "none", width: "100%" }}>
                    Search
                  </button>
                </>
              )}
            </div>
            <div className={`col-12 col-md-5 d-flex ${width > 768 ? "justify-content-end" : "justify-content-center"}`}>
              <div style={{ maxWidth: width > 768 ? "70%" : "70vw", maxHeight: width > 768 ? "400px" : "250px" }}>
                <UILottie animation={HeroAnimation1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpCenterHeader;
