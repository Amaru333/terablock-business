import React from "react";
import { getScreenSize } from "../../../functions/getScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";

function SwidgePageHeader() {
  const width = getScreenSize().width;
  return (
    <div className="pb-5">
      <div className="pt-5 position-relative">
        <div className="row mx-0" style={{ zIndex: 1 }}>
          <div className="my-5 px-4 px-md-5 col-12 col-md-6 pe-0 pe-md-5 d-flex flex-column justify-content-center text-center pe-4 text-md-start">
            <h1 className="text-primaryTextDark">
              TeraBlock Swidge<span className="text-primaryViolet">.</span>
            </h1>
            <p className="text-primaryTextGray mb-0 fs-6">TeraBlock Swidge lets users buy crypto through bank cards, swap, bridge and transfer tokens from a unified platform to any blockchain game in just a few clicks. It's an automation Web3 protocol designed explicitly for Blockchain-based games.</p>
            {width > 768 && (
              <div className="mt-4">
                <UIButton type="primary">Launch Swidge</UIButton>
              </div>
            )}
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img src="./assets/images/swidge-header.png" style={{ zIndex: 1, maxWidth: width > 768 ? "40vw" : "80vw", objectFit: "contain" }} />
          </div>
          {width < 768 && (
            <div className="d-flex justify-content-center mt-5">
              <UIButton type="primary">Launch Swidge</UIButton>
            </div>
          )}
        </div>
      </div>
      <img src="./assets/icons/3x4.svg" width="30px" className="ms-5 mt-3" />
    </div>
  );
}

export default SwidgePageHeader;
