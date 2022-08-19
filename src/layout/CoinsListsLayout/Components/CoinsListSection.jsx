import React from "react";
import CoinsListCard from "../../../common/Cards/CoinsListCard";
import { useScreenSize } from "../../../functions/useScreenSize";
import UICard from "../../../widgets/UICard/UICard";

function CoinsListSection() {
  const width = useScreenSize().width;

  const coinlist_data = [
    {
      image: "./assets/images/coinslists/btc.png",
      title: "Binance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["./assets/images/coinslists/e-cash.png", "./assets/images/coinslists/btc.png", "./assets/images/coinslists/ripple.png", "./assets/images/coinslists/xss.png", "./assets/images/coinslists/coin-5.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "High",
    },
    {
      image: "./assets/images/coinslists/eth.png",
      title: "Ethereum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["./assets/images/coinslists/e-cash.png", "./assets/images/coinslists/btc.png", "./assets/images/coinslists/ripple.png", "./assets/images/coinslists/xss.png", "./assets/images/coinslists/coin-5.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "Low",
    },
    {
      image: "./assets/images/coinslists/usdt.png",
      title: "Tether",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["./assets/images/coinslists/e-cash.png", "./assets/images/coinslists/btc.png", "./assets/images/coinslists/ripple.png", "./assets/images/coinslists/xss.png", "./assets/images/coinslists/coin-5.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "Med",
    },
    {
      image: "./assets/images/coinslists/btc.png",
      title: "Binance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["./assets/images/coinslists/e-cash.png", "./assets/images/coinslists/btc.png", "./assets/images/coinslists/ripple.png", "./assets/images/coinslists/xss.png", "./assets/images/coinslists/coin-5.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "High",
    },
    {
      image: "./assets/images/coinslists/eth.png",
      title: "Ethereum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["./assets/images/coinslists/e-cash.png", "./assets/images/coinslists/btc.png", "./assets/images/coinslists/ripple.png", "./assets/images/coinslists/xss.png", "./assets/images/coinslists/coin-5.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "Low",
    },
    {
      image: "./assets/images/coinslists/usdt.png",
      title: "Tether",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["./assets/images/coinslists/e-cash.png", "./assets/images/coinslists/btc.png", "./assets/images/coinslists/ripple.png", "./assets/images/coinslists/xss.png", "./assets/images/coinslists/coin-5.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "Med",
    },
  ];
  return (
    <div className="pb-5 position-relative">
      <div className="text-center mt-5 px-4 px-md-5 mx-0 mx-md-5 pb-5">
        <h3 className="text-primaryTextDark fw-bold">
          <b>
            Coins you shouldn't miss<span className="text-primaryViolet">.</span>
          </b>
        </h3>
        <p className="text-primaryTextGray fs-6">CoinsList empowers you to see the possibilities of consistent simplified investments and helps you realize your financial goals.</p>
      </div>
      <div className="row mx-3 mx-md-4">
        {coinlist_data.map((data, index) => (
          <div className="col-12 col-md-6 col-xl-4" key={index}>
            <CoinsListCard data={data} />
          </div>
        ))}
      </div>
      {width > 768 && (
        <>
          <div className="d-flex flex-row justify-content-center">
            <img src="./assets/icons/left-block-arrow.svg" />
            <img src="./assets/icons/right-block-arrow.svg" />
          </div>
          <img src="./assets/icons/3x4.svg" className="position-absolute" style={{ width: "30px", bottom: "9rem", right: "3rem" }} />
          <img src="./assets/icons/3x4.svg" className="position-absolute" style={{ width: "30px", bottom: "9rem", left: "3rem" }} />
        </>
      )}
    </div>
  );
}

export default CoinsListSection;
