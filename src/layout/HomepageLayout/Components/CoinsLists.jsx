import { useRouter } from "next/router";
import React, { useState } from "react";
import UILottie from "../../../common/Lottie/UILottie";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";

import CoinslistsAnimation1 from "../animations/coinslists_hero_2.json";

function CoinLists() {
  const width = useScreenSize().width;
  const router = useRouter();

  const [buttonText, setButtonText] = useState("Get Started");
  const openNewTab = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="py-5 bg-white px-0">
      <div className="py-5 pb-5" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "68%" : width > 940 ? "78%" : "100%" }}>
        <div className="row mx-0 px-3 px-md-0 pt-3 d-flex flex-column-reverse flex-md-row">
          <div className="col-12 col-md-7 mt-4 mt-md-0 d-flex align-items-center p-0 px-0 px-md-3">
            <div style={{ width: width < 768 ? "100%" : "85%" }}>
              <h2 className="text-primaryTextDark fw-bold pt-4" style={{ textAlign: "left" }}>
                <b>Deploy DeFi Solutions Across Multiple Chains 4x Faster</b>
              </h2>
              <p className="text-cardDescriptionColor fs-6 py-4" style={{ textAlign: "justify", lineHeight: "30px" }}>
                Plug-and-Play DeFi protocols tailored to your project's needs ensure optimal functionality and alignment with their core objectives. Our DeFi solutions cut costs by over 80% and sped
                up the development by 4x
              </p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <UIButton
                  type="primary"
                  style={{ marginRight: "10px" }}
                  ml0
                  width="150px"
                  onClick={() => openNewTab("https://app.terablock.com/login")}
                  onMouseOut={() => setButtonText("Get Started")}
                >
                  {buttonText}
                </UIButton>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 d-flex justify-content-center px-0">
            <div className="position-relative align-self-center">
              <img src="/assets/images/coinslists/DeFi-Protocols.png" className={`${width < 1120 && "w-100"}`} />
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 pb-5 my-0 my-md-5" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "68%" : width > 940 ? "78%" : "100%" }}>
        <div className="row mx-0 px-3 px-md-0 pt-3 d-flex flex-md-row">
          <div className="col-12 col-md-5 d-flex justify-content-center px-0">
            <div className="position-relative align-self-center">
              <img src="/assets/images/coinslists/DeFi-Protocols.png" className={`${width < 1120 && "w-100"}`} />
            </div>
          </div>
          <div className="col-12 col-md-7 mt-4 mt-md-0 d-flex align-items-center p-0 px-0 px-md-3 justify-content-end">
            <div style={{ width: width < 768 ? "100%" : "85%" }}>
              <h2 className="text-primaryTextDark fw-bold" style={{ textAlign: "left" }}>
                <b>One Widget to Streamline Multichain User Journey</b>
              </h2>
              <p className="text-cardDescriptionColor fs-6 py-4" style={{ textAlign: "justify", lineHeight: "30px" }}>
                Provide Fiat to crypto on-ramp and one-click cross-chain Swaps with Swidge, our DeFi Protocols Automation tool, We've consolidated multi-chain bridges and DEXs, eliminating the need
                for you to piece together various bridges and DEXs or spend months on integration. With TeraBlock, your dApp is ready for use immediately!
              </p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <UIButton
                  type="primary"
                  style={{ marginRight: "10px" }}
                  ml0
                  width="180px"
                  onClick={() => openNewTab("https://app.terablock.com/login")}
                  onMouseOut={() => setButtonText("Get Started")}
                >
                  Integrate Widget
                </UIButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 pb-5 my-0 my-md-5" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "68%" : width > 940 ? "78%" : "100%" }}>
        <div className="row mx-0 px-3 px-md-0 pt-3 d-flex flex-column-reverse flex-md-row">
          <div className="col-12 col-md-7 mt-4 mt-md-0 d-flex align-items-center p-0 px-0 px-md-3">
            <div style={{ width: width < 768 ? "100%" : "85%" }}>
              <h2 className="text-primaryTextDark fw-bold pt-4" style={{ textAlign: "left" }}>
                <b>Your Trusted Partner in Navigating the DeFi Landscape</b>
              </h2>
              <p className="text-cardDescriptionColor fs-6 py-4" style={{ textAlign: "justify", lineHeight: "30px" }}>
                We back you with technology management, maintanance, and customer support to help you navigate the DeFi ecosystem hassle-free. We're committed to ensuring your DeFi operations run
                smoothly and efficiently.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-5 d-flex justify-content-center px-0">
            <div className="position-relative align-self-center">
              <img src="/assets/images/coinslists/DeFi-Protocols.png" className={`${width < 1120 && "w-100"}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinLists;
