import React from "react";
import { getScreenSize } from "../../../functions/getScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";
import IntroSectionStyles from "../Styles/IntroSection.module.css";

function IntroSection() {
  const width = getScreenSize().width;
  return (
    <div className="text-center text-md-start position-relative">
      <div className="row mx-0 p-4">
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
          <div className="d-flex my-2 justify-content-center justify-content-md-start">
            <UIButton type="primary">Get Started</UIButton>
            <UIButton type="secondary">Launch App</UIButton>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md start position-relative">
          <img src="./assets/images/iphone-12-black.png" style={{ zIndex: 2 }} />
          <img src="./assets/icons/ellipse-red.svg" className="position-absolute" style={{ width: "50px", top: "0rem", right: "1rem" }} />
          <img src="./assets/icons/ellipse-blue.svg" className="position-absolute" style={{ width: "25px", bottom: "0rem", left: "1rem" }} />
        </div>
      </div>
      {width < 768 && <img src="./assets/icons/3x4.svg" className="position-absolute" style={{ width: "30px", bottom: "20rem", right: "0rem" }} />}

      <div className={["d-flex justify-content-around p-4", IntroSectionStyles.bottom_logos].join(" ")}>
        <img src="./assets/images/coin-telegraph.png" style={{ width: width < 768 && "20%", height: width < 768 && "20%" }} />
        <img src="./assets/images/yahoo-finance.png" style={{ width: width < 768 && "20%", height: width < 768 && "20%" }} />
        <img src="./assets/images/news-btc.png" style={{ width: width < 768 && "20%", height: width < 768 && "20%" }} />
        <img src="./assets/images/coin-quora.png" style={{ width: width < 768 && "20%", height: width < 768 && "20%" }} />
      </div>
      {width > 768 && <img src="./assets/icons/3x4.svg" className="position-absolute" style={{ width: "30px", bottom: "7rem", left: "1rem" }} />}

      <div className="row bg-backgroundBlue px-4 mx-0 justify-content-center">
        <div className="py-4 col-4 col-md">
          <p className="mb-0 text-center text-white">$ 20,000,000</p>
          <p className="mb-0 text-center text-white">Transaction Volume</p>
        </div>
        <div className="py-4 col-4 col-md">
          <p className="mb-0 text-center text-white">2,234,000,000</p>
          <p className="mb-0 text-center text-white">Tokens Transacted</p>
        </div>
        <div className="py-4 col-4 col-md">
          <p className="mb-0 text-center text-white">25,000</p>
          <p className="mb-0 text-center text-white">Secure Transactions</p>
        </div>
        <div className="py-4 col-4 col-md">
          <p className="mb-0 text-center text-white">8,000</p>
          <p className="mb-0 text-center text-white">Happy Users</p>
        </div>
        <div className="py-4 col-4 col-md">
          <p className="mb-0 text-center text-white">24 hrs</p>
          <p className="mb-0 text-center text-white">Support</p>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
