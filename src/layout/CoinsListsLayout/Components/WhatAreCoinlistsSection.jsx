import React from "react";
import CardWithLogo from "../../../common/Cards/CardWithLogo";
import { useScreenSize } from "../../../functions/useScreenSize";
import WhatAreCoinlistsStyle from "../Styles/WhatAreCoinlists.module.css";

function WhatAreCoinlistsSection() {
  const width = useScreenSize().width;

  return (
    <div className="py-5 bg-white px-0">
      <div className="pt-4" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "68%" : width > 940 ? "78%" : "98%" }}>
        <div className="text-center mb-2 px-3">
          <h2 className="text-primaryTextDark fw-bold">
            <b>Redefining how you invest in Cryptocurrencies</b>
          </h2>
          <p className="fs-6" style={{ color: "#5a5b5d" }}>
            Build your diversified long-term crypto portfolio in under 10mins!
          </p>
        </div>
        <div className="row mx-0 px-2 px-md-0 pt-3 d-flex flex-column-reverse flex-md-row">
          <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex align-items-center">
            <div style={{ color: "#5a5b5d" }}>
              <p className="fs-6" style={{ textAlign: "justify", lineHeight: "30px" }}>
                CoinsList is our carefully selected portfolio of cryptocurrencies that reflects a theme, idea or goal. It exposes you to the most sought-after cryptocurrencies without requiring you to invest time and effort in learning about them.
              </p>
              <p className="fs-6" style={{ textAlign: "justify", lineHeight: "30px" }}>
                Our aim with CoinsList is to help you become an informed investor, no matter how much or how little you want to invest. CoinsList empowers you with simplified investments and helps you realise your financial goals from our easy-to-use unified platform.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex" style={{ justifyContent: width > 768 ? "end" : "center" }}>
            <div className="">
              <img src="/assets/images/coinslist_hero.png" style={{ width: width > 768 ? "300px" : "80vw" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-4" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "71%" : width > 940 ? "83%" : "98%" }}>
        <div className="row mx-2 mx-md-0 mt-5 position-relative">
          <div className="col-12 col-md-4">
            <CardWithLogo image="/assets/images/coinslists/coinlists.svg" title="Simplified Investing">
              <div style={{ textAlign: "justify" }}>Invest in multiple cryptocurrencies with just a few clicks. There is no prior knowledge required due to our learning-based approach of onboarding.</div>
            </CardWithLogo>
          </div>
          <div className="col-12 col-md-4">
            <CardWithLogo image="/assets/images/coinslists/coinlists.svg" title="Be in Control">
              <div style={{ textAlign: "justify" }}>CoinsList is fully decentralised and non-custodial so your funds are always in your control.</div>
            </CardWithLogo>
          </div>
          <div className="col-12 col-md-4">
            <CardWithLogo image="/assets/images/coinslists/coinlists.svg" title="Don't just Buy; Invest!">
              <div style={{ textAlign: "justify" }}>CoinsList is a set and forget approach to investing in cryptocurrencies. CoinsList helps you Invest with a long-term view of building wealth.</div>
            </CardWithLogo>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatAreCoinlistsSection;
