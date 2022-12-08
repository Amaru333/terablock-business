import React, { useState } from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";
import { useScreenSize } from "../../../functions/useScreenSize";

import HeroAnimation1 from "../animations/hero_animation.json";
import UILottie from "../../../common/Lottie/UILottie";

function ProductsHeaderSection() {
  const width = useScreenSize().width;
  const [buttonText, setButtonText] = useState("Get Started");
  return (
    <div className="px-0 px-md-2 px-xl-5">
      <div className="py-4" style={{ maxWidth: "1500px", margin: "auto" }}>
        <div className="row mx-0 d-flex">
          <div className="my-5 px-4 px-md-5 col-12 col-md-6 pe-0 pe-md-5 d-flex flex-column justify-content-around text-center pe-4 text-md-start">
            <h1 className="text-primaryTextDark fw-bold" style={{ fontSize: width > 768 ? "50px" : "23px", width: width > 768 ? "75%" : "100%" }}>
              Products
            </h1>
            <p className="text-primaryTextGray mb-0 mb-md-5">Utilitarian products that help you interact with Defi on a unified platform. TeraBlock products are built for all and can be used by everyone regardless of knowledge and skill level.</p>
            {width > 768 && (
              <div className="d-flex">
                <UIButton type="primary" width="150px" onMouseOver={() => setButtonText("Coming Soon")} onMouseOut={() => setButtonText("Get Started")}>
                  {buttonText}
                </UIButton>
                <UIButton type="secondary">Discover Products</UIButton>
              </div>
            )}
          </div>
          <div className="col-12 col-md-6 d-flex  justify-content-center justify-content-md-end my-2">
            {/* <img src="/assets/images/product-header.png" style={{ maxWidth: width > 768 ? "40vw" : "80vw", objectFit: "contain" }} /> */}
            <div style={{ maxHeight: "350px", maxWidth: "100%" }}>
              <UILottie animation={HeroAnimation1} />
            </div>
          </div>
          {width < 768 && (
            <div className="d-flex justify-content-center mt-2">
              <UIButton type="primary" width="150px" onMouseOver={() => setButtonText("Coming Soon")} onMouseOut={() => setButtonText("Get Started")}>
                {buttonText}
              </UIButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsHeaderSection;
