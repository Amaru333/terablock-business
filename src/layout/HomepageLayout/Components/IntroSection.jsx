import React from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";
import IntroSectionStyles from "../Styles/IntroSection.module.css";

function IntroSection() {
  return (
    <div className="p-4">
      <div className="row mx-0">
        <div className="col-12 col-md-8 align-self-center">
          <div className="d-flex flex-column mb-3" style={{ width: "fit-content" }}>
            <div className="d-flex align-items-center">
              <div>
                <img src="./assets/images/secure_logo.png" />
              </div>
              <div>
                <p className="mb-0 mx-2 text-primaryText fw-normal">
                  Your crypto in <i>your control</i>
                </p>
              </div>
            </div>
            <img src="./assets/images/underline.svg" style={{ width: "80px", alignSelf: "flex-end", marginRight: "10px" }} />
          </div>
          <div className={IntroSectionStyles.intro_text_section}>
            <p className="display-3 fw-normal text-primaryTextDark">
              Investing in crypto made better<span className="text-primaryViolet">.</span>
            </p>
            <p className="text-primaryTextGray my-4">Truly decentralised app that gives you the tools, inspiration, and support you need to become a better crypto investor.</p>
          </div>
          <div className="d-flex my-2">
            <UIButton type="primary">Get Started</UIButton>
            <UIButton type="secondary">Launch App</UIButton>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <img src="./assets/images/iphone-12-black.png" />
        </div>
      </div>
      <div className={["d-flex justify-content-around", IntroSectionStyles.bottom_logos].join(" ")}>
        <img src="./assets/images/coin-telegraph.png" />
        <img src="./assets/images/yahoo-finance.png" />
        <img src="./assets/images/news-btc.png" />
        <img src="./assets/images/coin-quora.png" />
      </div>
    </div>
  );
}

export default IntroSection;
