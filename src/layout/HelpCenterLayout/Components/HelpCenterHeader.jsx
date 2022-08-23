import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UISearchBar from "../../../widgets/UISearchBar/UISearchBar";

import HelpCenterHeaderStyle from "../Styles/HelpCenterHeader.module.css";

function HelpCenterHeader() {
  const width = useScreenSize().width;
  return (
    <div className={["px-2 px-md-5 py-5", HelpCenterHeaderStyle.body_font].join(" ")}>
      <div className="px-0 px-md-2 px-xl-5">
        <div className="row mx-0 d-flex flex-column-reverse flex-md-row">
          <div className="col-12 col-md-7 d-flex flex-column justify-content-center align-items-center align-items-md-start">
            <h1 className="text-fontDark mb-4 mb-md-3 mt-4 mt-md-0" style={{ fontSize: width > 768 ? "58px" : "24px" }}>
              How can we help you ?
            </h1>
            <UISearchBar maxWidth="580px" />
            {width < 769 && (
              <>
                <button className="bg-primaryBlue text-white py-3 mt-3 rounded" style={{ border: "none", width: "100%" }}>
                  Search
                </button>
              </>
            )}
          </div>
          <div className="col-12 col-md-5 d-flex justify-content-center">
            <img src="/assets/images/help_center/help-header.png" style={{ maxWidth: width > 768 ? "100%" : "80vw", objectFit: "contain" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpCenterHeader;
