import React from "react";
import CardWithLogo from "../../../common/Cards/CardWithLogo";
import { useScreenSize } from "../../../functions/useScreenSize";
import WhatAreCoinlistsStyle from "../Styles/WhatAreCoinlists.module.css";

function WhatAreCoinlistsSection() {
  const width = useScreenSize().width;

  return (
    <div className="py-5 bg-white">
      <div className="text-center mb-2 px-3">
        <h3 className="text-primaryTextDark">
          <b>
            What are CoinsLists<span className="text-primaryViolet">.</span>
          </b>
        </h3>
        <p className="text-primaryTextGray fs-6">CoinsList empowers you to see the possibilities of consistent simplified investments and helps you realize your financial goals.</p>
      </div>
      <div className="row mx-0 px-3 px-md-5 pt-3 d-flex flex-column-reverse flex-md-row">
        <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex align-items-center">
          <div>
            <p className="text-cardDescriptionColor fs-6">CoinsList is our carefully selected baskets of tokens built around different themes and categories that matter the most. These are curated and managed by our Technology to give you exposure to the most sought after crypto assets. </p>
            <p className="text-cardDescriptionColor fs-6">CoinsList is designed to financially connect you to Cryptocurrencies and give you the exposure to the most sought after digital assets without having to put in the time and effort of researching and learning about them.</p>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className="position-relative align-self-center">
            <img src="./assets/images/gamers-header.png" className={`${width < 1120 && "w-100"}`} />
            <div className={WhatAreCoinlistsStyle.circular_blur}></div>
          </div>
        </div>
      </div>
      <div className="row mx-4 mx-md-0 mx-xl-5 mt-5 position-relative">
        <div className="col-12 col-md-4">
          <CardWithLogo image="./assets/images/coinslists/coinlists.svg" title="Easy to understand">
            <div>
              The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.
              <p className="mt-3">
                Get started with as little as <span className="text-primaryBlue fw-bold">$100.</span>
              </p>
            </div>
          </CardWithLogo>
        </div>
        <div className="col-12 col-md-4">
          <CardWithLogo image="./assets/images/coinslists/coinlists.svg" title="Managed by experts">
            <div>
              The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.
              <p className="mt-3">
                Get started with as little as <span className="text-primaryBlue fw-bold">$100.</span>
              </p>
            </div>
          </CardWithLogo>
        </div>
        <div className="col-12 col-md-4">
          <CardWithLogo image="./assets/images/coinslists/coinlists.svg" title="Created for all">
            <div>
              The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.
              <p className="mt-3">
                Get started with as little as <span className="text-primaryBlue fw-bold">$100.</span>
              </p>
            </div>
          </CardWithLogo>
        </div>
        <img src="./assets/icons/4x5.svg" style={{ width: "70px", position: "absolute", bottom: "2rem", left: "0rem" }} />
      </div>
    </div>
  );
}

export default WhatAreCoinlistsSection;
