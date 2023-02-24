import React, { useState } from "react";
import UILottie from "../../../common/Lottie/UILottie";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";

import HeroAnimation1 from "../animations/coinslists_hero_3.json";

function CoinsListsHeader() {
  const width = useScreenSize().width;
  const [buttonText, setButtonText] = useState("Get Started");
  return (
    <div className="pb-5 px-0">
      <div style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "72%" : width > 940 ? "83%" : "100%" }}>
        <div className="mt-5 position-relative">
          <div className="row mx-0" style={{ zIndex: 1 }}>
            <div className="my-5 px-4 px-md-5 col-12 col-md-6 pe-0 pe-md-5 d-flex flex-column justify-content-center text-center pe-4 text-md-start">
              <h1 className="fw-bold" style={{ fontSize: width > 768 ? "50px" : "23px", width: width > 768 ? "75%" : "100%", color: "#1b2b6b" }}>
                CoinsList
              </h1>
              <p className="mb-0 fs-6" style={{ color: "#5a5b5d" }}>
                CoinsList is our carefully selected portfolio of cryptocurrencies that reflects a theme, idea or goal.
              </p>
              {/* {width > 940 && (
                <>
                  <div className="mt-4">
                    <UIButton type="primary" ml0 style={{ marginRight: "10px" }} width="150px" onMouseOver={() => setButtonText("Coming Soon")} onMouseOut={() => setButtonText("Get Started")}>
                      {buttonText}
                    </UIButton>
                    <UIButton type="secondary">Discover CoinsLists</UIButton>
                  </div>
                </>
              )} */}
            </div>
            <div className={`col-12 col-md-6 d-flex ${width > 768 ? "justify-content-end" : "justify-content-center"}`}>
              <div style={{ maxWidth: width > 768 ? "70%" : "70vw", maxHeight: width > 768 ? "300px" : "250px" }}>
                <UILottie animation={HeroAnimation1} />
              </div>
            </div>
            {/* {width < 941 && (
              <>
                <div className="d-flex justify-content-center mt-4">
                  <UIButton type="primary">Get Started</UIButton>
                  <UIButton type="secondary">Discover</UIButton>
                </div>
                
              </>
            )} */}
          </div>
        </div>
        {/* <img src="/assets/icons/3x4.svg" width="30px" className="ms-5 mt-3" /> */}
      </div>
    </div>
  );
}

export default CoinsListsHeader;
