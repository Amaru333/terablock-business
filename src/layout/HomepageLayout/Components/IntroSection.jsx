import React from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";
import IntroSectionStyles from "../Styles/IntroSection.module.css";

function IntroSection() {
  return (
    <div className="">
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
          <div className="d-flex my-2">
            <UIButton type="primary">Get Started</UIButton>
            <UIButton type="secondary">Launch App</UIButton>
          </div>
        </div>
        <div className="col-6 col-md col-md-4">
          <img src="./assets/images/iphone-12-black.png" />
        </div>
      </div>
      <div className={["d-flex justify-content-around p-4", IntroSectionStyles.bottom_logos].join(" ")}>
        <img src="./assets/images/coin-telegraph.png" />
        <img src="./assets/images/yahoo-finance.png" />
        <img src="./assets/images/news-btc.png" />
        <img src="./assets/images/coin-quora.png" />
      </div>
      <div className="row row-cols-3 row-cols-md-5 bg-primaryBlue px-4 mx-0">
        <div className="py-4 col">
          <p className="mb-0 text-center text-white">$ 20,000,000</p>
          <p className="mb-0 text-center text-white">Transaction Volume</p>
        </div>
        <div className="py-4 col">
          <p className="mb-0 text-center text-white">2,234,000,000</p>
          <p className="mb-0 text-center text-white">Tokens Transacted</p>
        </div>
        <div className="py-4 col">
          <p className="mb-0 text-center text-white">25,000</p>
          <p className="mb-0 text-center text-white">Secure Transactions</p>
        </div>
        <div className="py-4 col-6 col-md">
          <p className="mb-0 text-center text-white">8,000</p>
          <p className="mb-0 text-center text-white">Happy Users</p>
        </div>
        <div className="py-4 col-6 col-md">
          <p className="mb-0 text-center text-white">24 hrs</p>
          <p className="mb-0 text-center text-white">Support</p>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
