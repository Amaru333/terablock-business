import React, { useState } from "react";
import UILottie from "../../../common/Lottie/UILottie";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";

import CoinslistsAnimation1 from "../animations/coinslists_hero_2.json";

function CoinLists() {
  const width = useScreenSize().width;

  const [buttonText, setButtonText] = useState("Get Started");
  return (
    <div className="py-5 bg-white px-0">
      <div className="text-center mb-2 px-3">
        <h3 className="text-primaryTextDark fw-bold pt-5" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "68%" : width > 940 ? "80%" : "95%" }}>
          <b>Build your long-term crypto portfolio with CoinsLists</b>
        </h3>
        <p className="fs-6" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "60%" : "75%", color: "#5a5b5b" }}>
          CoinsList is a set and forget approach to investing in Cryptocurrencies. Set your financial goals and let your money work for you.
        </p>
      </div>
      <div className="py-4 pb-5" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "68%" : width > 940 ? "78%" : "95%" }}>
        <div className="row mx-0 px-3 px-md-0 pt-3 d-flex flex-column-reverse flex-md-row">
          <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex align-items-center">
            <div style={{ width: width < 768 ? "100%" : "85%" }}>
              <p className="text-cardDescriptionColor fs-6" style={{ textAlign: "justify", lineHeight: "30px" }}>
                CoinsLists is our carefully selected portfolio of cryptocurrencies that reflects a theme, idea or goal. It exposes you to the most sought-after cryptocurrencies without requiring you to invest time and effort in learning about them.
              </p>
              <p className="text-cardDescriptionColor fs-6 mb-4" style={{ textAlign: "justify", lineHeight: "30px" }}>
                Our aim with CoinsList is to help you become an informed investor, no matter how much or how little you want to invest. CoinsListempowers you with simplified investments and helps you realise your financial goals from our easy-to-use unified platform.
              </p>
              <UIButton type="primary" ml0 width="150px" onMouseOver={() => setButtonText("Coming Soon")} onMouseOut={() => setButtonText("Get Started")}>
                {buttonText}
              </UIButton>
              <UIButton style={{ marginLeft: "20px !important" }}>Learn More</UIButton>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="position-relative align-self-center" style={{ maxWidth: "350px" }}>
              {/* <img src="/assets/images/coinslists/coinslists-header.svg" className={`${width < 1120 && "w-100"}`} /> */}
              <UILottie animation={CoinslistsAnimation1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinLists;
