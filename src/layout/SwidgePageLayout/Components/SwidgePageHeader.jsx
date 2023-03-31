import React, { useState } from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UILottie from "../../../common/Lottie/UILottie";
import UIButton from "../../../widgets/UIButtons/UIButton";
import HeroAnimation1 from "../animations/swidge_01_hero.json";

function SwidgePageHeader() {
  const width = useScreenSize().width;
  const [buttonText, setButtonText] = useState("Get Started");
  return (
    <div className="pb-5 px-0">
      <div style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "72%" : width > 940 ? "85%" : "100%" }}>
        <div className="pt-5 position-relative">
          <div className="row mx-0" style={{ zIndex: 1 }}>
            <div className="my-5 px-4 px-md-5 col-12 col-md-6 pe-0 pe-md-5 d-flex flex-column justify-content-center text-center pe-4 text-md-start">
              <h1 className="text-primaryTextDark fw-bold" style={{ color: "#5a5b5b", fontSize: width > 768 ? "50px" : "23px", width: width > 768 ? "75%" : "100%" }}>
                Swidge
              </h1>
              <p className="mb-0 fs-6 mt-2" style={{ color: "#5a5b5b" }}>
                <b>Powerful Web3 multi-protocol automation</b> that helps you onboard decentralised applications (Dapps) without the complexities of DeFi.
              </p>
              {/* {width > 904 && (
                <div className="mt-4">
                  <UIButton type="primary" ml0 style={{ marginRight: "10px" }} width="150px" onMouseOver={() => setButtonText("Coming Soon")} onMouseOut={() => setButtonText("Get Started")}>
                    {buttonText}
                  </UIButton>
                  <UIButton>Discover Swidge</UIButton>
                </div>
              )} */}
            </div>
            <div className={`col-12 col-md-6 d-flex ${width > 768 ? "justify-content-end" : "justify-content-center"}`}>
              <div style={{ maxWidth: width > 767 ? "430px" : "70vw", maxHeight: width > 767 ? "350px" : "300px", padding: width > 767 ? "50px" : "0px" }}>
                <UILottie animation={HeroAnimation1} />
              </div>
            </div>
            {/* {width < 904 && (
              <div className="d-flex justify-content-center mt-5">
                <UIButton type="primary" width="150px" onMouseOver={() => setButtonText("Coming Soon")} onMouseOut={() => setButtonText("Get Started")}>
                  {buttonText}
                </UIButton>
                <UIButton>Discover Swidge</UIButton>
              </div>
            )} */}
          </div>
        </div>
      </div>
      {/* <img src="/assets/icons/3x4.svg" width="30px" className="ms-5 mt-3" /> */}
    </div>
  );
}

export default SwidgePageHeader;
