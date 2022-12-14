import React from "react";
import UILottie from "../../../common/Lottie/UILottie";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";

import HeroAnimation1 from "../animations/hero_01.json";

function HeaderComponent() {
  const width = useScreenSize().width;
  const screenSize = useScreenSize();
  return (
    <div className="px-0" style={{ backgroundColor: "#f8f9fd" }}>
      <div className="py-4" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : width > 940 ? "83%" : "100%" }}>
        <div className="row mx-0 px-3 px-md-4 py-5">
          <div className="col-12 col-md-7 text-center text-md-start d-flex flex-column justify-content-evenly">
            <div className={screenSize.width > 768 ? "w-75" : "w-100"}>
              <h1 className="fw-bold" style={{ color: "rgb(27, 43, 107)", color: "#1b2b6b", fontSize: width > 767 ? "40px" : "23px" }}>
                A vibrant global network of thinkers and believers
              </h1>
            </div>
            <div className={screenSize.width > 768 ? "w-75" : "w-100"}>
              <p className="my-4 fs-6" style={{ color: "#767676" }}>
                Technology and innovation remain at the heart of our endeavours. Our true strength is in our spirited community members, who recognise the potential of decentralisation and have become a critical part of our global operations.
              </p>
            </div>
          </div>
          <div className={`col-12 col-md-5 d-flex ${width > 768 ? "justify-content-end" : "justify-content-center"}`}>
            <div style={{ maxWidth: "300px" }}>
              <UILottie animation={HeroAnimation1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
