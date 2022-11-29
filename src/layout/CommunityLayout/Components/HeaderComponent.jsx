import React from "react";
import UILottie from "../../../common/Lottie/UILottie";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";

import HeroAnimation1 from "../animations/hero_01.json";

function HeaderComponent() {
  const width = useScreenSize().width;
  const screenSize = useScreenSize();
  return (
    <div className="px-0 px-md-2 px-xl-5" style={{ backgroundColor: "#f8f9fd" }}>
      <div className="py-4" style={{ maxWidth: "1500px", margin: "auto" }}>
        <div className="row mx-0 px-3 px-md-5 py-5">
          <div className="col-12 col-md-6 text-center text-md-start d-flex flex-column justify-content-evenly">
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
            {/* {screenSize.width > 768 && (
              <>
                <div>
                  <UIButton type="secondary">Get Started</UIButton>
                </div>
                <img src="/assets/icons/3x4-light.png" className="mt-1" style={{ width: "30px" }} />
              </>
            )} */}
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
            <div style={{ maxWidth: "500px" }}>
              <UILottie animation={HeroAnimation1} />
            </div>
            {/* <img src="/assets/images/community-header.png" className={`pe-0 mt-3 mt-md-0 pe-md-5`} style={{ maxWidth: screenSize.width > 768 ? "40vw" : "80vw", objectFit: "contain" }} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
